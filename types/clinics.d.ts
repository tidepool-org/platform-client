declare function _exports(common: any): {
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
    getClinics: (options?: {
        limit?: number;
        offset?: number;
        email?: string;
    }, cb: Function) => Function;
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
    createClinic: (clinic: {
        name?: string;
        address?: string;
        city?: string;
        postalCode?: string;
        state?: string;
        country?: string;
        phoneNumbers?: {
            type?: string;
            number?: string;
        };
        clinicType?: string;
        clinicSize?: number;
        email: string;
    }, cb: Function) => Function;
    /**
     * Retrieve a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinic: (clinicId: string, cb: Function) => Function;
    /**
     * Retrieve a clinic by share code
     *
     * @param {String} shareCode - Share code of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicByShareCode: (shareCode: string, cb: Function) => Function;
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
    updateClinic: (clinicId: string, clinic: {
        id: string;
        name?: string;
        address?: string;
        city?: string;
        postalCode?: string;
        state?: string;
        country?: string;
        phoneNumbers?: {
            type?: string;
            number?: string;
        };
        clinicType?: string;
        clinicSize?: number;
        email: string;
    }, cb: Function) => Function;
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
    getCliniciansFromClinic: (clinicId: string, options?: {
        search?: string;
        offset?: number;
        limit?: number;
        email?: string;
    }, cb: Function) => Function;
    /**
     * Get a clinician for a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinician: (clinicId: string, clinicianId: string, cb: Function) => Function;
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
    updateClinician: (clinicId: string, clinicianId: string, clinician: {
        id: string;
        inviteId?: string;
        email: string;
        name: string;
        roles: string[];
    }, cb: Function) => Function;
    /**
     * Remove association of clinic to clinician
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} clinicianId - Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    deleteClinicianFromClinic: (clinicId: string, clinicianId: string, cb: Function) => Function;
    /**
     * Remove association of clinic to patient
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    deletePatientFromClinic: (clinicId: string, patientId: string, cb: Function) => Function;
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
    getPatientsForClinic: (clinicId: string, options?: {
        search?: string;
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
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
    createClinicCustodialAccount: (clinicId: string, patient: {
        email: string;
        fullName: string;
        birthDate: string;
        mrn?: string;
        targetDevices?: string[];
    }, cb: Function) => void;
    /**
     * Get a patient from clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientFromClinic: (clinicId: string, patientId: string, cb: Function) => Function;
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
    updateClinicPatient: (clinicId: string, patientId: string, patient: {
        email: string;
        fullName: string;
        birthDate: string;
        mrn?: string;
        targetDevices?: string[];
    }, cb: Function) => Function;
    /**
     * Send an invite to a clinician to join a clinic
     *
     * @param {String} clinicId - clinic ID
     * @param {Object} clinician - clinician Invite object
     * @param {String} clinician.email - clinician's email address
     * @param {String[]} clinician.roles - array of clinician's roles
     * @param {Function} cb
    */
    inviteClinician: (clinicId: string, clinician: {
        email: string;
        roles: string[];
    }, cb: Function) => void;
    /**
     * Retrieve an invitation sent to clinician to join the clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => Function;
    /**
     * Resend the clinician invite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    resendClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => void;
    /**
     * Delete the outgoing clinician invite
     *
     * @param {String} clinicId - clinic Id
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    deleteClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => void;
    /**
     * Retrieve list of patient invitations for clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getPatientInvites: (clinicId: string, cb: Function) => Function;
    /**
     * Accept a pending invite from patient user
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    acceptPatientInvitation: (clinicId: string, inviteId: string, cb: Function) => Function;
    /**
     * Revoke (as a patient) or decline (as a clinic) a pending invite from patient user
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    deletePatientInvitation: (clinicId: string, inviteId: string, cb: Function) => Function;
    /**
     * Update permissions that a clinic has for patient
     *
     * @param {String} clinicId - Id of the clinic
     * @param {String} patientId - Id of the patient
     * @param {Object} permissions - New permissions
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    updatePatientPermissions: (clinicId: string, patientId: string, permissions: any, cb: Function) => Function;
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
    getClinicsForPatient: (userId: string, options?: {
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
    /**
     * Retrieve list of invitations to join a clinic
     *
     * @param {String} userId - User Id of the clinician
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicianInvites: (userId: string, cb: Function) => Function;
    /**
     * Accept an invite to join a clinic as a clinician
     *
     * @param {String} userId - User Id of the clinician
     * @param {String} inviteId - Id of the invite
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    acceptClinicianInvite: (userId: string, inviteId: string, cb: Function) => Function;
    /**
     * Dismisses an invite sent from a clinic to clinician
     *
     * @param {String} userId - User Id of invited clinician
     * @param {String} inviteId - invite Id
     * @param {Function} cb
    */
    dismissClinicianInvite: (userId: string, inviteId: string, cb: Function) => void;
    /**
     *
     * @param {String} clinicianId - Id of the clinician
     * @param {Object} [options]
     * @param {Number} [options.offset] - Page of results
     * @param {Number} [options.limit] - Results per page
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    getClinicsForClinician: (clinicianId: string, options?: {
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
    /**
     * Invite a clinic
     *
     * @param {String} shareCode - share code of the clinic to invite
     * @param {Object} permissions - permissions to be given
     * @param {String} patientId - id of the patient that sent the invite
     * @param cb
     * @returns {cb}  cb(err, response)
    */
    inviteClinic: (shareCode: string, permissions: any, patientId: string, cb: any, ...args: any[]) => any;
    /**
     * Invite a clinic
     *
     * @param {String} clinicId - Id of the clinic
     * @param {Function} cb
     * @returns {cb} cb(err, response)
    */
    triggerInitialClinicMigration: (clinicId: string, cb: Function, ...args: any[]) => Function;
    /**
     * sendPatientUploadReminder
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientId - id of the patient to send the reminder to
     * @param {Function} cb
    */
    sendPatientUploadReminder: (clinicId: string, patientId: string, cb: Function) => void;
    /**
     * createClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {Object} patientTag - the patient tag to create
     * @param {String} patientTag.name - the tag name
     * @param {Function} cb
    */
    createClinicPatientTag: (clinicId: string, patientTag: {
        name: string;
    }, cb: Function) => void;
    /**
     * updateClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientTagId - id of patient tag to update
     * @param {Object} patientTag - the updated patient tag
     * @param {String} patientTag.name - the updated tag name
     * @param {Function} cb
    */
    updateClinicPatientTag: (clinicId: string, patientTagId: string, patientTag: {
        name: string;
    }, cb: Function) => void;
    /**
     * deleteClinicPatientTag
     *
     * @param {String} clinicId - clinic Id
     * @param {String} patientTagId - id of patient tag to delete
     * @param {Function} cb
    */
    deleteClinicPatientTag: (clinicId: string, patientTagId: string, cb: Function) => void;
};
export = _exports;
