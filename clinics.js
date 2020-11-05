'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Retrieve list of clinics.  Requires admin app authorization
     *
     * @param {Object} options
     * @param {String} [options.clinicianId] - Clinician ID
     * @param {String} [options.patientId] - Patient ID
     * @param {Number} [options.limit] - Query result limit
     * @param {Number} [options.offset] - Query offset
     * @param {String} [options.sortOrder] - Query sort order
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getClinics: function(options = {}, cb){
      common.assertArgumentsSize(2);
      var url = '/clinics';
      if(!_.isEmpty(options)){
        url += '?' + common.serialize(options);
      }
      common.doGetWithToken(
        url,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Add a new clinic
     *
     * @param {Object} clinic - New clinic
     * @param {String} [clinic.name] - Clinic name
     * @param {String} [clinic.address] - Clinic address
     * @param {Object[]} [clinic.phoneNumbers] - Array of phone number objects for the clinic
     * @param {String} [clinic.phoneNumbers[].type] - Phone number description
     * @param {String} [clinic.phoneNumbers[].number] - Phone number
     * @param {String} [clinic.location] - Location
     * @param {Object} [clinic.metadata]
     *
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    createClinic: function(clinic, cb){
      common.assertArgumentsSize(2);
      common.doPostWithToken(
        '/clinics',
        clinic,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Retrieve a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getClinic: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/clinics/${clinicId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Update a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Object} updates
     * @param {String} [updates.name] - Clinic name
     * @param {String} [updates.address] - Clinic address
     * @param {Object[]} [updates.phoneNumbers] - Array of phone number objects for the clinic
     * @param {String} [updates.phoneNumbers[].type] - Phone number description
     * @param {String} [updates.phoneNumbers[].number] - Phone number
     * @param {String} [updates.location] - Location
     * @param {Object} [updates.metadata]
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    updateClinic: function(clinicId, updates, cb){
      common.assertArgumentsSize(3);
      common.doPatchWithToken(
        `/clinics/${clinicId}`,
        updates,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Delete a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    deleteClinic: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doDeleteWithToken(
        `/clinics/${clinicId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Get a clinician for a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getClinician: function(clinicId, clinicianId, cb){
      common.assertArgumentsSize(3);
      common.doGetWithToken(
        `/clinics/${clinicId}/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Update a clinician
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} clinicianId - Id of the clinician
     * @param {Object} updates
     * @param {String[]} updates.permissions - Array of string permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    updateClinician: function(clinicId, clinicianId, updates, cb){
      common.assertArgumentsSize(4);
      common.doPatchWithToken(
        `/clinics/${clinicId}/clinicians/${clinicianId}`,
        updates,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Remove association of clinic to clinician
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    deleteClinicianFromClinic: function(clinicId, clinicianId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/clinics/${clinicId}/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Get list of patients associated with clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getPatientsForClinic: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/clinics/${clinicId}/patients`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      )
    },

    /**
     * Add patient to clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Object} patient
     * @param {String} [patient.id] - Id of this relationship
     * @param {String} [patient.patientId] - Id of the patient
     * @param {String} [patient.clinicId] - Id of clinic
     * @param {String[]} [patient.permissions] - Array of string permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    addPatientToClinic: function(clinicId, patient, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/clinics/${clinicId}/patients`,
        patient,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Get a patient from clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getPatientFromClinic: function(clinicId, patientId, cb){
      common.assertArgumentsSize(3);
      common.doGetWithToken(
        `/clinics/${clinicId}/patients/${patientId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Modify a patient from clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} patientId - Id of the patient
     * @param {Object} updates
     * @param {String[]} updates.permissions - Array of string permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    updateClinicPatient: function(clinicId, patientId, updates, cb){
      common.assertArgumentsSize(4);
      common.doPatchWithToken(
        `/clinics/${clinicId}/patients/${patientId}`,
        updates,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Remove association of clinic to patient
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Number} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    deletePatientFromClinic: function(clinicId, patientId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/clinics/${clinicId}/patients/${patientId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Retrieve a list of clinicians for a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getCliniciansFromClinic: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/clinics/${clinicId}/clinicians`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Add a clinician to a clinic
     *
     * @param {Number} clinicId - Id of the clinic
     * @param {Object} clinician
     * @param {String} [clinician.clinicianId] - Id of the clinician
     * @param {String} [clinician.clinicId] - Id of the clinic
     * @param {String[]} [clinician.permissions] - Array of string permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    addClinicianToClinic: function(clinicId, clinician, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/clinics/${clinicId}/clinicians`,
        clinician,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Retrieves information on patients in any of the clinics
     *
     * @param {Number} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getClinicsPatient: function(patientId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/clinics/patients/${patientId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Delete patient from all clinics
     *
     * @param {Number} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    deleteClinicsPatient: function(patientId, cb){
      common.assertArgumentsSize(2);
      common.doDeleteWithToken(
        `/clinics/patients/${patientId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Gets Clinicians from all clinics
     *
     * @param {Number} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    getClinicsClinician: function(clinicianId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/clinics/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Deletes clinician from all clinics
     *
     * @param {Number} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
     */
    deleteClinicsClinician: function(clinicianId, cb){
      common.assertArgumentsSize(2);
      common.doDeleteWithToken(
        `/clinics/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },
  };
};
