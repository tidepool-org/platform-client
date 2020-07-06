'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Get all prescriptions
     *
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getPrescriptions: function (cb) {
      common.assertArgumentsSize(arguments, 1);
      common.doGetWithToken(
        '/v1/prescriptions',
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Create a prescription
     *
     * @param {Object} prescription - prescription to create
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    createPrescription: function (prescription, cb) {
      common.assertArgumentsSize(arguments, 2);
      common.doPostWithToken(
        '/v1/prescriptions',
        prescription,
        { 201: function(res){ return res.body; }},
        cb
      );
    },

    /**
     * Create a prescription revision
     *
     * @param {Object} prescription - prescription revision to create
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    createPrescriptionRevision: function (prescription, cb) {
      common.assertArgumentsSize(arguments, 2);
      common.doPostWithToken(
        '/v1/prescriptions/' + prescription.id + '/revisions',
        _.omit(prescription, 'id'),
        cb
      );
    },


    /**
     * Delete a prescription
     *
     * @param {String} prescriptionId - id of prescription to delete
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    deletePrescription: function (prescriptionId, cb) {
      common.assertArgumentsSize(arguments, 2);
      common.doDeleteWithToken(
        '/v1/prescriptions/' + prescriptionId,
        cb
      );
    },
  };
};
