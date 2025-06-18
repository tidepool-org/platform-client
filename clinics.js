'use strict';

var _ = require('lodash');

module.exports = function (common) {
  return {
    /**
     * Retrieve list of clinics.  Requires admin app authorization
     *
     * @param {Object} [options]
     * @param {Number} [options.limit] - Query result limit
     * @param {Number} [options.offset] - Query offset
     * @param {String} [options.email] - Email address
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinics: function(options = {}, cb){
      common.assertArgumentsSize(2);
      var url = '/v1/clinics';
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
     * @param {String} [clinic.city] - Clinic city
     * @param {String} [clinic.postalCode] - Clinic zip/postal code
     * @param {String} [clinic.state] - Clinic state
     * @param {String} [clinic.country] - Clinic country
     * @param {Object[]} [clinic.phoneNumbers] - Array of phone number objects for the clinic
     * @param {String} [clinic.phoneNumbers[].type] - Phone number description
     * @param {String} [clinic.phoneNumbers[].number] - Phone number
     * @param {String} [clinic.clinicType] - Type of clinic
     * @param {Number} [clinic.clinicSize] - Patient population size
     * @param {String} clinic.email - Primary email address for clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    createClinic: function(clinic, cb){
      common.assertArgumentsSize(2);
      common.doPostWithToken(
        '/v1/clinics',
        clinic,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Retrieve a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinic: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Retrieve a clinic by share code
     *
     * @param {String} shareCode - Share code of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicByShareCode: function(shareCode, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/share_code/${shareCode}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Update a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Object} clinic
     * @param {String} clinic.id - Clinic ID
     * @param {String} [clinic.name] - Clinic name
     * @param {String} [clinic.address] - Clinic address
     * @param {String} [clinic.city] - Clinic city
     * @param {String} [clinic.postalCode] - Clinic zip/postal code
     * @param {String} [clinic.state] - Clinic state
     * @param {String} [clinic.country] - Clinic country
     * @param {Object[]} [clinic.phoneNumbers] - Array of phone number objects for the clinic
     * @param {String} [clinic.phoneNumbers[].type] - Phone number description
     * @param {String} [clinic.phoneNumbers[].number] - Phone number
     * @param {String} [clinic.clinicType] - Type of clinic
     * @param {Number} [clinic.clinicSize] - Patient population size
     * @param {String} clinic.email - Primary email address for clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    updateClinic: function(clinicId, clinic, cb){
      common.assertArgumentsSize(3);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}`,
        clinic,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Retrieve a list of clinicians for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Object} [options] - Search options
     * @param {String} [options.search] - Query
     * @param {Number} [options.offset] - Page offset
     * @param {Number} [options.limit] - Results per page
     * @param {String} [options.email] - Email to search
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
     getCliniciansFromClinic: function(clinicId, options = {}, cb){
      var url = `/v1/clinics/${clinicId}/clinicians`;
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

    /**
     * Get a clinician for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinician: function(clinicId, clinicianId, cb){
      common.assertArgumentsSize(3);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Update a clinician
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} clinicianId - Id of the clinician
     * @param {Object} clinician
     * @param {String} clinician.id - String representation of a Tidepool User ID
     * @param {String} [clinician.inviteId] - The id of the invite if it hasn't been accepted
     * @param {String} clinician.email - The email of the clinician
     * @param {String} clinician.name - The name of the clinician
     * @param {String[]} clinician.roles - Array of string roles
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    updateClinician: function(clinicId, clinicianId, clinician, cb){
      common.assertArgumentsSize(4);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/clinicians/${clinicianId}`,
        clinician,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Remove association of clinic to clinician
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    deleteClinicianFromClinic: function(clinicId, clinicianId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/clinicians/${clinicianId}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Remove association of clinic to patient
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
     deletePatientFromClinic: function(clinicId, patientId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}`,
        { 204: null },
        cb
      );
    },

    /**
     * Get list of patients associated with clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Object} [options] - search options
     * @param {String} [options.search] - search query string
     * @param {Number} [options.offset] - search page offset
     * @param {Number} [options.limit] - results per page
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientsForClinic: function(clinicId, options = {}, cb){
      var url = `/v1/clinics/${clinicId}/patients`;
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
      )
    },

    /**
     * Create a new custodial patient account
     *
     * @param {String} clinicId - ID of the clinic
     * @param {Object} patient - new patient
     * @param {String} patient.email - The email address of the patient
     * @param {String} patient.fullName - The full name of the patient
     * @param {String} patient.birthDate - YYYY-MM-DD
     * @param {String} [patient.mrn] - The medical record number of the patient
     * @param {String[]} [patient.targetDevices] - Array of string target devices
     * @param {Function} cb
    */
    createClinicCustodialAccount: function (clinicId, patient, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/patients`,
        patient,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Get a patient from clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientFromClinic: function(clinicId, patientId, cb){
      common.assertArgumentsSize(3);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Modify a patient from clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Object} patient - new patient
     * @param {String} patient.email - The email address of the patient
     * @param {String} patient.fullName - The full name of the patient
     * @param {String} patient.birthDate - YYYY-MM-DD
     * @param {String} [patient.mrn] - The medical record number of the patient
     * @param {String[]} [patient.targetDevices] - Array of string target devices
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    updateClinicPatient: function(clinicId, patientId, patient, cb){
      common.assertArgumentsSize(4);

      // Explicitly omit any fields that are never expected to be updated from frontend clients.
      // Note that some fields that we don't provide a means to update are still sent along if they don't
      // implement `omitEmpty` when being written to the database, as they would otherwise be deleted.
      const patientUpdate = _.omit(patient, [
        'clinicId',
        'createdTime',
        'ehrSubscriptions',
        'id',
        'isMigrated',
        'legacyClinicianIds',
        'invitedBy',
        'lastUploadReminderTime',
        'permissions',
        'reviews',
        'summary',
        'updatedTime',
        'userId',
      ]);

      common.doPutWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}`,
        patientUpdate,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Send an invite to a clinician to join a clinic
     *
     * @param {String} clinicId - clinic ID
     * @param {Object} clinician - clinician Invite object
     * @param {String} clinician.email - clinician's email address
     * @param {String[]} clinician.roles - array of clinician's roles
     * @param {Function} cb
    */
    inviteClinician: function(clinicId, clinician, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/invites/clinicians`,
        clinician,
        { 200: function(res){ return res.body; } },
        cb
      )
    },

    /**
     * Retrieve an invitation sent to clinician to join the clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicianInvite: function(clinicId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/invites/clinicians/${inviteId}`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Resend the clinician invite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    resendClinicianInvite: function(clinicId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doPatchWithToken(
        `/v1/clinics/${clinicId}/invites/clinicians/${inviteId}`,
        '',
        { 200: function(res){ return res.body; } },
        cb
      )
    },

    /**
     * Delete the outgoing clinician invite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    deleteClinicianInvite: function(clinicId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/invites/clinicians/${inviteId}`,
        { 200: function(res){ return res.body; } },
        cb
      )
    },

    /**
     * Retrieve list of patient invitations for clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientInvites: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/invites/patients`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Accept a pending invite from patient user
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Object} [patientDetails] - Patient details to set for newly created clinic user
     * @param {String} [patientDetails.fullName] - The full name of the patient
     * @param {String} [patientDetails.birthDate] - YYYY-MM-DD
     * @param {String} [patientDetails.mrn] - The medical record number of the patient
     * @param {String[]} [patientDetails.tags] - Array of string tag IDs
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    acceptPatientInvitation: function(clinicId, inviteId, patientDetails, cb){
      if(_.isFunction(patientDetails) && _.isUndefined(cb)){
        cb = patientDetails;
        patientDetails = null;
      }
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/invites/patients/${inviteId}`,
        patientDetails,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Revoke (as a patient) or decline (as a clinic) a pending invite from patient user
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    deletePatientInvitation: function(clinicId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/invites/patients/${inviteId}`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Update permissions that a clinic has for patient
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Object} permissions - New permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    updatePatientPermissions: function(clinicId, patientId, permissions, cb){
      common.assertArgumentsSize(4);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}/permissions`,
        permissions,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Get the MRN settings for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicMRNSettings: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/settings/mrn`,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      );
    },

    /**
     * Get the EHR settings for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicEHRSettings: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/settings/ehr`,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      );
    },

    /**
     * Get list of clinics associated with patient
     *
     * @param {String} userId - Patient user id
     * @param {Object} [options] - search options
     * @param {Number} [options.offset] - search page offset
     * @param {Number} [options.limit] - results per page
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicsForPatient: function(userId, options = {}, cb){
      var url = `/v1/patients/${userId}/clinics`;
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
      )
    },

    /**
     * Retrieve list of invitations to join a clinic
     *
     * @param {String} userId - User Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicianInvites: function(userId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinicians/${userId}/invites`,
        { 200: function(res){ return res.body; }, 404: [] },
        cb
      );
    },

    /**
     * Accept an invite to join a clinic as a clinician
     *
     * @param {String} userId - User Id of the clinician
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    acceptClinicianInvite: function(userId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doPutWithToken(
        `/v1/clinicians/${userId}/invites/${inviteId}`,
        null,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Dismisses an invite sent from a clinic to clinician
     *
     * @param {String} userId - User Id of invited clinician
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    dismissClinicianInvite: function(userId, inviteId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinicians/${userId}/invites/${inviteId}`,
        { 200: function(res){ return res.body; } },
        cb
      )
    },

    /**
     *
     * @param {String} clinicianId - Id of the clinician
     * @param {Object} [options]
     * @param {Number} [options.offset] - Page of results
     * @param {Number} [options.limit] - Results per page
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicsForClinician: function(clinicianId, options = {}, cb){
      var url = `/v1/clinicians/${clinicianId}/clinics`;
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

    /**
     * Invite a clinic
     *
     * @param {String} shareCode - share code of the clinic to invite
     * @param {Object} permissions - permissions to be given
     * @param {String} patientId - id of the patient that sent the invite
     * @param cb
     * @returns {cb}  cb(err, response)
    */
    inviteClinic: function (shareCode, permissions, patientId, cb) {
      common.assertArgumentsSize(arguments, 4);
      var details = { shareCode, permissions };

      common.doPostWithToken(
        `/confirm/send/invite/${patientId}/clinic`,
        details,
        cb
      );
    },

    /**
     * Invite a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    triggerInitialClinicMigration: function (clinicId, cb) {
      common.assertArgumentsSize(arguments, 2);

      common.doPostWithToken(
        `/v1/clinics/${clinicId}/migrate`,
        null,
        cb
      );
    },

    /**
     * sendPatientUploadReminder
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientId - id of the patient to send the reminder to
     * @param {Function} cb
    */
    sendPatientUploadReminder: function(clinicId, patientId, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}/upload_reminder`,
        null,
        cb
      );
    },

    /**
     * sendPatientDataProviderConnectRequest
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientId - id of the patient to send the dexcom connect request to
     * @param {String} providerName - name of the provider to send the dexcom connect request to
     * @param {Function} cb
    */
     sendPatientDataProviderConnectRequest: function(clinicId, patientId, providerName, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}/connect/${providerName}`,
        null,
        { 204: null },
        cb
      );
    },

    /**
     * createClinicSite
     *
     * @param {String} clinicId - clinic Id
     * @param {Object} site - the site to create
     * @param {String} site.name - the site name
     * @param {Function} cb
    */
     createClinicSite: function(clinicId, site, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/sites`,
        site,
        cb
      );
    },

    /**
     * updateClinicSite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} siteId - id of site to update
     * @param {Object} site - the updated site
     * @param {String} site.name - the updated site name
     * @param {Function} cb
    */
     updateClinicSite: function(clinicId, siteId, site, cb){
      common.assertArgumentsSize(4);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/sites/${siteId}`,
        site,
        cb
      );
    },

    /**
     * deleteClinicSite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} siteId - id of site to delete
     * @param {Function} cb
    */
     deleteClinicSite: function(clinicId, siteId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/sites/${siteId}`,
        cb
      );
    },

    /**
     * createClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {Object} patientTag - the patient tag to create
     * @param {String} patientTag.name - the tag name
     * @param {Function} cb
    */
     createClinicPatientTag: function(clinicId, patientTag, cb){
      common.assertArgumentsSize(3);
      common.doPostWithToken(
        `/v1/clinics/${clinicId}/patient_tags`,
        patientTag,
        cb
      );
    },

    /**
     * updateClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientTagId - id of patient tag to update
     * @param {Object} patientTag - the updated patient tag
     * @param {String} patientTag.name - the updated tag name
     * @param {Function} cb
    */
     updateClinicPatientTag: function(clinicId, patientTagId, patientTag, cb){
      common.assertArgumentsSize(4);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/patient_tags/${patientTagId}`,
        patientTag,
        cb
      );
    },

    /**
     * deleteClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientTagId - id of patient tag to delete
     * @param {Function} cb
    */
     deleteClinicPatientTag: function(clinicId, patientTagId, cb){
      common.assertArgumentsSize(3);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/patient_tags/${patientTagId}`,
        cb
      );
    },

    /**
     * Get list of patients for Tide Dashboard
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Object} [options] - report config options
     * @param {Number} [options.period] - period to sort by (1d|7d|14d|30d)
     * @param {Array}  [options.tags] - Array of patient tag IDs
     * @param {Number} [options.lastDataCutoff] - ISO date for data recency cutoff date
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientsForTideDashboard: function(clinicId, options = {}, cb){
      var url = `/v1/clinics/${clinicId}/tide_report`;
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
      )
    },

    /**
     * Get list of patients for RPM Report
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Object} [options] - report config options
     * @param {Number} [options.startDate] - UTC ISO datetime for first day of the report range
     * @param {Number} [options.endDate] - UTC ISO datetime for last day of the report range
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientsForRpmReport: function(clinicId, options = {}, cb){
      var url = `/v1/clinics/${clinicId}/reports/realtime`;
      if(_.isFunction(options) && _.isUndefined(cb)){
        cb = options;
        options = {};
      }
      if (!_.isEmpty(options)) {
        if (_.isPlainObject(options.patientFilters)) {
          options.patientFilters = JSON.stringify(options.patientFilters);
        }
        url += '?' + common.serialize(options);
      }
      common.doGetWithToken(
        url,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      )
    },

    /*
     * Get patient count for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicPatientCount: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/patient_count`,
        { 200: function(res){ return res.body; } },
        cb
      );
    },

    /**
     * Get patient count settings for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicPatientCountSettings: function(clinicId, cb){
      common.assertArgumentsSize(2);
      common.doGetWithToken(
        `/v1/clinics/${clinicId}/settings/patient_count`,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      );
    },

    /**
     * Mark a clinic patient as reviewed
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - id of the patient to mark reviewed
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    setClinicPatientLastReviewed: function(clinicId, patientId, cb){
      common.assertArgumentsSize(2);
      common.doPutWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}/reviews`,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      );
    },

    /**
     * Revert a clinic patient last reviewed date
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - id of the patient to revert
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    revertClinicPatientLastReviewed: function(clinicId, patientId, cb){
      common.assertArgumentsSize(2);
      common.doDeleteWithToken(
        `/v1/clinics/${clinicId}/patients/${patientId}/reviews`,
        { 200: function(res){ return res.body; }, 404: {} },
        cb
      );
    },
  };
};
