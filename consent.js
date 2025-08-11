'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Returns the latest consent version for the given type
     *
     * @param {String} consentType - type of the consent (e.g., 'big_data_donation_project')
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getLatestConsentByType: function (consentType, cb) {
      common.assertArgumentsSize(arguments, 2);
      common.doGetWithToken(
        `/v1/consents/${consentType}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },
  };
};
