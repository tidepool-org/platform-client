'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Create a prescription
     *
     * @param {String} clinicId - id of the clinic
     * @param {Object} prescription - prescription to create
     * @param cb
     * @returns {cb} cb(err, response)
     */
    createPrescription: function (clinicId, prescription, cb) {
      common.assertArgumentsSize(arguments, 3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/prescriptions`,
        prescription,
        { 201: function(res){ return res.body; }},
        cb
      );
    },

    /**
     * Create a prescription revision
     *
     * @param {String} clinicId - id of the clinic
     * @param {Object} revision - prescription revision to create
     * @param {String} prescriptionId - prescription id to attach revision to
     * @param cb
     * @returns {cb} cb(err, response)
     */
    createPrescriptionRevision: function (clinicId, revision, prescriptionId, cb) {
      common.assertArgumentsSize(arguments, 4);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/prescriptions/${prescriptionId}/revisions`,
        revision,
        cb
      );
    },


    /**
     * Delete a prescription
     *
     * @param {String} clinicId - id of the clinic
     * @param {String} prescriptionId - id of prescription to delete
     * @param cb
     * @returns {cb} cb(err, response)
     */
    deletePrescription: function (clinicId, prescriptionId, cb) {
      common.assertArgumentsSize(arguments, 3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/prescriptions/${prescriptionId}`,
        cb
      );
    },

    /**
     * Get all prescriptions for a clinic
     *
     * @param {String} clinicId - id of the clinic
     * @param {Object} [options]
     * @param {Number} [options.size] - Query result limit
     * @param {Number} [options.page] - Query page offset
     * @param cb*
     * @returns {cb} cb(err, response)
     */
    getPrescriptionsForClinic: function (clinicId, options = {}, cb) {
      var url = `/v1/clinics/${clinicId}/prescriptions`;
      if(_.isFunction(options) && _.isUndefined(cb)){
        cb = options;
        options = {};
      }
      if(!_.isEmpty(options)){
        url += '?' + common.serialize(options);
      }
      common.doGetWithToken(
        url,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },
  };
};
