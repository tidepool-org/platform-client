'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Get all CGM devices
     *
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getCGMDevices: function (cb) {
      common.assertArgumentsSize(arguments, 1);
      common.doGetWithToken(
        '/v1/devices/cgms',
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Get all Pump devices
     *
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getPumpDevices: function (cb) {
      common.assertArgumentsSize(arguments, 1);
      common.doGetWithToken(
        '/v1/devices/pumps',
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },
  };
};
