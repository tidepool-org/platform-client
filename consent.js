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

    /**
     * Returns a list of all user consent records.
     * By default only the most recent consent record for a given consent type will be returned.
     * Note: Returning all historical versions (with `version=all`) is not currently supported by this client method.
     *
     * @param {String} userId - id of the user to fetch consents for
     * @param {String} consentType - type of the consent (e.g., 'big_data_donation_project')
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getUserConsentRecords: function (userId, consentType, cb) {
      common.assertArgumentsSize(arguments, 3);
      common.doGetWithToken(
        `/v1/users/${userId}/consents?type=${consentType}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Creates a user consent record
     *
     * @param {String} userId - id of the user to fetch consents for
     * @param {Object} consentRecord - the consent record to create
     * @param {String} consentRecord.ageGroup - Allowed values: ['<13', '13-17', '>=18']
     * @param {String} consentRecord.ownerName - The name of the account owner
     * @param {String} [consentRecord.parentGuardianName] - The name of the parent or legal guardian granting the consent record. Required if ageGroup is '<13' or '13-17'.
     * @param {String} consentRecord.grantorType - Allowed values: ['owner', 'parent/guardian']
     * @param {String} consentRecord.type - type of the consentRecord (e.g., 'big_data_donation_project')
     * @param {Object} [consentRecord.metadata]
     * @param {String[]} [consentRecord.metadata.supportedOrganizations] - Allowed values: ['ADCES Foundation', 'Beyond Type 1', 'Children With Diabetes', 'The Diabetes Link', 'Diabetes Youth Families (DYF)', 'DiabetesSisters', 'The diaTribe Foundation', 'Breakthrough T1D']
     * @param {Number} consentRecord.version - >=1
     * @param cb
     * @returns {cb} cb(err, response)
     */
    createUserConsentRecord: function (userId, consentRecord, cb) {
      common.assertArgumentsSize(arguments, 3);
      common.doPostWithToken(
        `/v1/users/${userId}/consents`,
        consentRecord,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Updates a user consent record
     *
     * @param {String} userId - id of the user to update a consent for
     * @param {String} recordId - id of the consent record to update
     * @param {Object} updates
     * @param {Object} updates.metadata
     * @param {Array[String]} [updates.metadata.supportedOrganizations] - Allowed values: ['ADCES Foundation', 'Beyond Type 1', 'Children With Diabetes', 'The Diabetes Link', 'Diabetes Youth Families (DYF)', 'DiabetesSisters', 'The diaTribe Foundation', 'Breakthrough T1D']
     * @param cb
     * @returns {cb} cb(err, response)
     */
    updateUserConsentRecord: function (userId, recordId, updates, cb) {
      common.assertArgumentsSize(arguments, 4);
      common.doPatchWithToken(
        `/v1/users/${userId}/consents/${recordId}`,
        updates,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Revokes a user consent record
     *
     * @param {String} userId - id of the user to revoke a consent for
     * @param {String} recordId - id of the consent record to revoke
     * @param cb
     * @returns {cb} cb(err, response)
     */
    revokeUserConsentRecord: function (userId, recordId, cb) {
      common.assertArgumentsSize(arguments, 3);
      common.doDeleteWithToken(
        `/v1/users/${userId}/consents/${recordId}`,
        { 204: function(){ return null; } },
        cb
      );
    },
  };
};
