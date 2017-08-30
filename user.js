// == BSD2 LICENSE ==
// Copyright (c) 2015, Tidepool Project
//
// This program is free software; you can redistribute it and/or modify it under
// the terms of the associated License, which is identical to the BSD 2-Clause
// License as published by the Open Source Initiative at opensource.org.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the License for more details.
//
// You should have received a copy of the License along with this program; if
// not, you can obtain one from Tidepool Project at tidepool.org.
// == BSD2 LICENSE ==

'use strict';

var async = require('async');
var _ = require('lodash');

function defaultProperty(obj, property, defaultValue) {
  if (obj[property] == null) {
    obj[property] = defaultValue;
  }
  return obj;
}

function requireProperty(objectName, obj, property) {
  var value = obj[property];
  if (value == null) {
    throw new Error('Property [' + property + '] required on ' + objectName);
  }
  return value;
}

var requireDep = requireProperty.bind(null, 'deps');

module.exports = function (common, config, deps) {

  var myToken = null;
  var myUserId = null;

  var TOKEN_LOCAL_KEY = 'authToken';
  var ACCESS_TOKEN_LOCAL_KEY = 'authAccessToken';

  /*jshint unused:false */
  var log = requireDep(deps,'log');
  var store = requireDep(deps, 'localStore');
  var superagent = requireDep(deps, 'superagent');

  //config
  config = _.clone(config);

  /**
   * Initialize client for user
   *
   * @param cb
   */
  function initialize(cb) {

    myToken = store.getItem(ACCESS_TOKEN_LOCAL_KEY);
    common.syncAccessToken(myToken);

    if (!myToken) {
      myToken = store.getItem(TOKEN_LOCAL_KEY);
      common.syncToken(myToken);
    }
    
    if (myToken == null) {
      log.info('No local session found');
      return cb();
    }
    
  }
  /**
   * Save user session (in-memory and stored in browser)
   */
  function saveSession(newUserId, newToken, options) {
    options = options || {};
    myToken = newToken;
    common.syncToken(myToken);
    myUserId = newUserId;

    if (newToken == null) {
      store.removeItem(TOKEN_LOCAL_KEY);
      log.info('Destroyed local session');
      return;
    }

    log.info('Session saved');

    if (options.remember) {
      store.setItem(TOKEN_LOCAL_KEY, newToken);
      log.info('Saved session locally');
    }
  }
  /**
   * Save user session (in-memory and stored in browser)
   */
  function saveAccessTokenSession(newUserId, newToken, options) {
    options = options || {};
    myToken = newToken;
    common.syncAccessToken(myToken);
    myUserId = newUserId;

    if (newToken == null) {
      store.removeItem(ACCESS_TOKEN_LOCAL_KEY);
      log.info('Destroyed local access_token session');
      return;
    }

    log.info('Session saved');

    if (options.remember) {
      store.setItem(ACCESS_TOKEN_LOCAL_KEY, newToken);
      log.info('Saved session access_token locally');
    }
  }
  /**
   * Destroy user session (in-memory and stored in browser)
   */
  function destroySession() {
    return saveSession(null, null);
  }
  /**
   * Tells if the current client is logged in
   *
   * @returns {boolean} true if logged in
   */
  function isLoggedIn() {
    return myToken != null;
  }
  /**
   * Returns the logged in user's id
   *
   * @returns {String} userid or null if not logged in
   */
  function getUserId() {
    return myUserId;
  }
  /**
   * Returns the logged in user's token
   *
   * @returns {String} users token
   */
  function getUserToken(){
    return myToken;
  }
  /**
   * Login user to the Tidepool platform
   *
   * @param user object with a username and password to login
   * @param options (optional) object with `remember` boolean attribute
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function login(user, options, cb) {
    options = options || {};
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (user.username == null) {
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a username' });
    }
    if (user.password == null) {
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a password' });
    }

    superagent
      .post(common.makeAPIUrl('/auth/login', user.longtermkey))
      .auth(user.username, user.password)
      .end(
      function (err, res) {
        if (err != null) {
          err.body = (err.response && err.response.body) || '';
          return cb(err, null);
        }

        if (res.status !== 200) {
          return common.handleHttpError(res, cb);
        }

        var theUserId = res.body.userid;
        var theToken = res.headers[common.SESSION_TOKEN_HEADER];
        //x-tidepool-session only
        saveSession(theUserId, theToken, options);
        return cb(null,{userid: theUserId, user: res.body});
      });
  }
  /**
   * Logout user
   *
   * @returns {cb}  cb(err, response)
   */
  function logout(cb) {
    common.assertArgumentsSize(arguments, 1);

    if (isLoggedIn() === false) {
      setTimeout(function(){ cb(null, {}); }, 0);
    }

    saveAccessTokenSession(null, null);
    saveSession(null, null);

    return cb(null, {});
  }
  /**
   * Signup user to the Tidepool platform
   *
   * @param user object with a username and password
   * @param options (optional) object with `remember` boolean attribute
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function signup(user, options, cb) {
    options = options || {};
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (user.username == null) {
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a username' });
    }
    if (user.password == null) {
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a password' });
    }

    var newUser = _.pick(user, 'username', 'password', 'emails', 'roles');

    superagent
      .post(common.makeAPIUrl('/auth/user'))
      .send(newUser)
      .end(
      function (err, res) {
        if (err != null) {
          err.body = (err.response && err.response.body) || '';
          return cb(err);
        }
        var theUserId = res.body.userid;
        var theToken = res.headers[common.SESSION_TOKEN_HEADER];

        saveSession(theUserId, theToken, options);
        return cb(null,res.body);
      });
  }
  /**
   * Create a custodial account for the logged in user
   *
   * @param profile {Object} profile for account that is being created for
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function createCustodialAccount(profile, cb) {

    if (_.isEmpty(profile.fullName)) {
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a fullName' });
    }

    var custodialUser = {};
    // create an custodial account to attach to ours
    function createAccount(next){
      var body = {};
      if(!_.isEmpty(profile.emails)){
        body.emails = profile.emails;
        body.username = profile.emails[0];
      }
      superagent
       .post(common.makeAPIUrl('/auth/user/' + getUserId() + '/user'))
       .set(common.getHeader(), common.getHeaderToken())
       .send(body)
       .end(
       function (err, res) {
        if (err != null) {
          err.body = (err.response && err.response.body) || '';
          err.message = (err.response && err.response.error) || '';
          return next(err);
        }
        if(res.status === 201){
          custodialUser.id = res.body.userid;
          return next(null,{userid:res.body.userid});
        }
        return next({status:res.status,message:res.error});
      });
    }
    //add a profile name to the child account
    function createProfile(next){
      superagent
        .put(common.makeAPIUrl('/metadata/'+ custodialUser.id + '/profile'))
        .send(profile)
        .set(common.getHeader(), common.getHeaderToken())
        .end(
          function (err, res) {
            if (err != null) {
              err.body = (err.response && err.response.body) || '';
              err.message = (err.response && err.response.error) || '';
              return next(err);
            }
            if(res.status === 200){
              return next(null,res.body);
            }
            return next({status:res.status,message:res.error});
          });
    }
    // optionally send a confirmation email if email was provided
    function sendEmailConfirmation(next){
      if(_.isEmpty(profile.emails)){
        return next(null);
      }
      superagent
        .post(common.makeAPIUrl('/confirm/send/signup/'+custodialUser.id))
        .set(common.getHeader(), common.getHeaderToken())
        .send({})
        .end(
          function (err, res) {
            if (err != null) {
              err.body = (err.response && err.response.body) || '';
              err.message = (err.response && err.response.error) || '';
              return next(err);
            }
            if(res.status === 200){
              return next(null,res.body);
            }
            return next({status:res.status,message:res.error});
          });
    }

    async.series([
      createAccount,
      createProfile,
      sendEmailConfirmation
    ], function(err, results) {
      if(_.isEmpty(err)){
        var acct = {
          userid: results[0].userid,
          profile: results[1]
        };
        return cb(null,acct);
      }
      return cb(err);
    });
  }
  /**
   * Update current user account info
   *
   * @param {Object} user object with account info
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function updateCurrentUser(user, cb) {
    common.assertArgumentsSize(arguments, 2);
    var updateData = {
      updates: _.pick(user, 'username', 'password', 'emails', 'termsAccepted')
    };

    common.doPutWithToken('/auth/user', updateData, cb);
  }
  /**
   * Update custodial user account info
   *
   * @param {Object} user object with account info
   * @param custodial user id
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function updateCustodialUser(user, id, cb) {
    common.assertArgumentsSize(arguments, 3);
    var updateData = {
      updates: _.pick(user, 'username', 'password', 'emails', 'termsAccepted')
    };

    common.doPutWithToken('/auth/user/' + id, updateData, cb);
  }
  /**
   * Add or update the date the user accepted the terms and conditions
   *
   * @param {Object} user object with the attached terms info
   * @param cb
   * @returns {cb}  cb(err, response)
   */
  function acceptTerms(user, cb) {
    common.assertArgumentsSize(arguments, 2);

    if(_.isEmpty(user.terms)){
      return cb({ status : common.STATUS_BAD_REQUEST, message: 'Must specify a terms field' });
    }

    var updateUserTerms = {
      updates: _.pick(user, 'terms')
    };

    common.doPutWithToken('/auth/user', updateUserTerms, cb);
  }
  /**
   * Get current user account info
   *
   * @returns {cb}  cb(err, response)
   */
  function getCurrentUser(cb) {
    common.assertArgumentsSize(arguments, 1);
    common.doGetWithToken('/auth/user', cb);
  }
  return {
    acceptTerms : acceptTerms,
    createCustodialAccount : createCustodialAccount,
    destroySession: destroySession,
    getCurrentUser : getCurrentUser,
    getUserId : getUserId,
    getUserToken : getUserToken,
    isLoggedIn: isLoggedIn,
    login : login,
    logout : logout,
    signup : signup,
    initialize : initialize,
    updateCurrentUser : updateCurrentUser,
    updateCustodialUser : updateCustodialUser,
    saveAccessTokenSession: saveAccessTokenSession
  };
};
