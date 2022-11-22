declare function _exports(config: any, deps: any): {
    /**
     * Do any requied initialization
     */
    initialize: (cb: any) => any;
    /**
    * Url used for uploads to the platform
    *
    * @returns {String} url for uploads
    */
    getUploadUrl: () => any;
    hasDataHost: () => boolean;
    setApiHost: (newhost: any) => void;
    setUploadHost: (newhost: any) => void;
    setDataHost: (newhost: any) => void;
    setBlipHost: (newhost: any) => void;
    makeBlipUrl: (path: any, extra: any) => any;
    /**
     * Post something to metrics.
     * This call never errors, so the callback is optional; it will be called if supplied.
     * This call also doesn't wait for the metrics call to return but returns immediately,
     * so if the metrics site is down you won't know it.
     * This call automatically adds a property client: true to the property list.
     *
     * @param eventname  String name of event to post to kissmetrics
     * @param properties Object list of key/value pairs to post as properties.
     * @param cb If provided, is called without arguments after posting; this call never errors, so callback is optional.
     * @returns {cb}  cb()
     */
    trackMetric: (eventname: any, properties: any, cb: any) => any;
    /**
     * Post an application error so that it can be logged
     *
     * This call never errors, so the callback is optional; it will be called if supplied.
     * This call also doesn't wait for the call to return but returns immediately.
     *
     * This call automatically adds a property client: true to the property list.
     *
     * @param error Object the error that will be logged
     * @param message String an optional message
     * @param properties Object list of key/value pairs to post as properties.
     * @param cb If provided, is called without arguments after posting; this call never errors, so callback is optional.
     * @returns {cb}  cb()
     */
    logAppError: (error: any, message: any, properties: any, cb: any) => any;
    /**
     * Add a new or update an existing preferences for a user
     *
     * @param {String} userId id of the user you are updating the preferences of
     * @param {Object} preferences object
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    addOrUpdatePreferences: (userId: string, preferences: any, cb: any) => any;
    /**
     * Add a new or update an existing profile for a user
     *
     * @param {String} userId id of the user you are updating the profile of
     * @param {Object} profile object
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    addOrUpdateProfile: (userId: string, profile: any, cb: any) => any;
    /**
     * Add a new or update an existing settings for a user
     *
     * @param {String} userId id of the user you are updating the settings of
     * @param {Object} settings object
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    addOrUpdateSettings: (userId: string, settings: any, cb: any) => any;
    /**
     * Find a user's preferences
     *
     * @param {String} userId id of the user you are finding the preferences of
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    findPreferences: (userId: string, cb: any) => any;
    /**
     * Find a user's profile
     *
     * @param {String} userId id of the user you are finding the profile of
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    findProfile: (userId: string, cb: any) => any;
    /**
     * Find a user's settings
     *
     * @param {String} userId id of the user you are finding the settings of
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    findSettings: (userId: string, cb: any) => any;
    /**
     * Get the users 'team'
     *
     * @param {String} userId id of the user
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getTeamMembers: (userId: string, cb: any, ...args: any[]) => any;
    /**
     * Get the users 'patients'
     *
     * @param {String} userId id of the user
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getViewableUsers: (userId: string, cb: any, ...args: any[]) => any;
    /**
     * Get the users 'patients' and their associated data
     * includes profile, permissions and metadata
     *
     * @param {String} userId id of the user
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getAssociatedUsersDetails: (userId: string, cb: any, ...args: any[]) => any;
    /**
     * Get the users 'patients' to whom they can upload for.
     *
     * @param {String} userId of the user
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getUploadGroups: (userId: string, cb: any, ...args: any[]) => any;
    /**
     * Sets the access permissions for a specific user on the group for the currently logged in user
     *
     * @param userId - userId to have access permissions set for
     * @param permissions - permissions to set
     * @param cb - function(err, perms), called with error if exists and permissions as updated
     */
    setAccessPermissions: (userId: any, permissions: any, cb: any) => any;
    /**
     * Sets the access permissions for a specific user on the given group
     *
     * @param groupId - the groupId we are setting user permissions on
     * @param userId - userId to have access permissions set for
     * @param permissions - permissions to set
     * @param cb - function(err, perms), called with error if exists and permissions as updated
     */
    setAccessPermissionsOnGroup: (groupId: any, userId: any, permissions: any, cb: any, ...args: any[]) => void;
    /**
     * Get the access permissions for a specific user on the given group
     *
     * @param groupId - the groupId we want permissions for
     * @param userId - userId that has those permissions
     * @param cb - function(err, perms), called with error if exists and permissions object
     */
    getAccessPermissionsForGroup: (groupId: any, userId: any, cb: any, ...args: any[]) => void;
    /**
     * Get the listed users public info
     *
     * @param {Array} patientIds array of id's that we want the public info for
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getPatientsInfo: (patientIds: any[], cb: any, ...args: any[]) => any;
    /**
     * Get raw device data for the user
     *
     * @param {String} userId of the user to get the device data for
     * @param {Object} options for the query
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getDeviceDataForUser: (userId: string, options: any, cb: any, ...args: any[]) => any;
    /**
     * Check the expected minimum versions for uploading
     *
     * @param cb
     * @returns {cb}  cb(err, response)
     * e.g.  {versions: {schema: 3, uploaderMinimum: '0.333.0'}}
     */
    checkUploadVersions: (cb: any, ...args: any[]) => any;
    /**
     * Get server time
     *
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getTime: (cb: any) => any;
    /**
     * Get the data sources for a given user
     *
     * @param {String} userId of the user to get the data sources for
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getDataSourcesForUser: (userId: string, cb: any, ...args: any[]) => any;
    /**
     * Create a dataset for the given user
     *
     * @param {String} userId of the user to create the dataset for
     * @param {Object} info for the dataset
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    createDatasetForUser: (userId: string, info: any, cb: any, ...args: any[]) => any;
    /**
     * Finalize the given dataset (close and post-process)
     *
     * @param {String} datasetId of the dataset to finalize
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    finalizeDataset: (datasetId: string, cb: any, ...args: any[]) => any;
    /**
     * Add data to the given dataset
     *
     * @param {String} datasetId of the dataset to add data
     * @param {Object} data to be added
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    addDataToDataset: (datasetId: string, data: any, cb: any, ...args: any[]) => any;
    /**
     * Upload device data for the given user
     *
     * @param {String} userId of the user to get the device data for
     * @param {Object} data to be uploaded
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    uploadDeviceDataForUser: (userId: string, data: any, cb: any, ...args: any[]) => any;
    /**
     * Upload blob data for the given user
     *
     * @param {String} userId of the user to get the device data for
     * @param {Object} blob to be uploaded
     * @param {String} contentType of blob, e.g. 'application/json'
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    uploadBlobForUser: (userId: string, blob: any, contentType: string, digest: any, cb: any, ...args: any[]) => any;
    /**
     * Start an device upload session by generating an uploadMeta record
     *
     * @param {Object} sessionInfo to initialise the upload session
     * @param cb
     * @returns {cb}  cb(err, uploadMeta)
     */
    startUploadSession: (sessionInfo: any, cb: any, ...args: any[]) => any;
    /**
     * Upload carelink data for the logged in user
     *
     * @param {Object} formData for the carelink upload
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    uploadCarelinkDataForUser: (formData: any, cb: any, ...args: any[]) => any;
    /**
     * Upload carelink data for the logged in user
     *
     * @param {string} dataId for the carelink upload
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getCarelinkData: (dataId: string, cb: any, ...args: any[]) => any;
    /**
     * Get upload records for the given user and device
     *
     * @param {String} userId of the user
     * @param {String} deviceId of the device
     * @param {String} size of the array to return
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getUploadRecordsForDevice: (userId: string, deviceId: string, size: string, cb: any, ...args: any[]) => any;
    /**
     * Get messages for a team between the given dates
     *
     * @param {String} userId of the user to get the messages for
     * @param {Object} options
     * @param {String} options.start [start=''] the start date is optional
     * @param {String} options.end [end=''] the end date is optional
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getAllMessagesForUser: (userId: string, options: {
        start: string;
        end: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * Get all notes within a specified date range
     *
     * @param {String} userId of the user to get the notes for
     * @param {Object} options
     * @param {String} options.start [start=''] the start date is optional
     * @param {String} options.end [end=''] the end date is optional
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getNotesForUser: (userId: string, options: {
        start: string;
        end: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * Reply to a specfic message thread
     *
     * @param {Object} comment on the message thread
     * @param {String} comment.timestamp
     * @param {String} comment.messagetext
     * @param {String} comment.groupid
     * @param {String} comment.userid
     * @param {String} comment.parentmessage
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    replyToMessageThread: (comment: {
        timestamp: string;
        messagetext: string;
        groupid: string;
        userid: string;
        parentmessage: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * Start a new message thread
     *
     * @param {Object} message that is the start of a new thread
     * @param {String} message.messagetext
     * @param {String} message.timestamp
     * @param {String} message.groupid
     * @param {String} message.userid
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    startMessageThread: (message: {
        messagetext: string;
        timestamp: string;
        groupid: string;
        userid: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * Get a specific message thread
     *
     * @param {String} messageId of the root message
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    getMessageThread: (messageId: string, cb: any, ...args: any[]) => any;
    /**
     * Edit an existing message
     *
     * @param {Object} edits for an existing message
     * @param {String} edits.id of the message to edit
     * @param {String} edits.messagetext [messagetext=''] updated text
     * @param {String} edits.timestamp [timestamp=''] updated timestamp
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    editMessage: (edits: {
        id: string;
        messagetext: string;
        timestamp: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * Get URL for data export for a given user
     *
     * @param {String} userId of the user to get data for
     * @param {String} loggedInUserId the userId of the logged in user
     * @param {Object} options
     * @param {String} options.format 'json'|'excel'
     * @param {String} options.startDate
     * @param {String} options.endDate
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getExportDataURL: (userId: string, loggedInUserId: string, options: {
        format: string;
        startDate: string;
        endDate: string;
    }, cb: any, ...args: any[]) => any;
    /**
     * User
     */
    acceptTerms: (user: any, cb: any, ...args: any[]) => any;
    createCustodialAccount: (profile: any, cb: any) => any;
    destroySession: () => void;
    getCurrentUser: (cb: any, ...args: any[]) => any;
    getUserId: () => string;
    isLoggedIn: () => boolean;
    login: (user: any, options: any, cb: any) => any;
    oauthLogin: (oauthToken: any, cb: any) => any;
    logout: (cb: any, ...args: any[]) => any;
    signup: (user: any, options: any, cb: any) => any;
    updateCurrentUser: (user: any, cb: any, ...args: any[]) => any;
    updateCustodialUser: (user: any, id: any, cb: any, ...args: any[]) => any;
    createRestrictedTokenForUser: (userId: string, restrictedTokenRequest: string, cb: any, ...args: any[]) => any;
    createOAuthProviderAuthorization: (provider: string, restrictedToken: string, cb: any, ...args: any[]) => any;
    deleteOAuthProviderAuthorization: (provider: string, cb: any, ...args: any[]) => any;
    /**
     * Signup
     */
    signupStart: (invitedId: string, cb: any, ...args: any[]) => any;
    signupConfirm: (signupId: string, cb: any, ...args: any[]) => any;
    custodialSignupConfirm: (signupId: string, birthday: string, password: string, cb: any, ...args: any[]) => any;
    signupResend: (email: string, cb: any, ...args: any[]) => any;
    signupCancel: (invitedId: any, cb: any, ...args: any[]) => any;
    /**
     * Invites
     */
    invitesSent: (inviterId: string, cb: any, ...args: any[]) => any;
    invitesReceived: (inviteeId: string, cb: any, ...args: any[]) => any;
    inviteUser: (email: string, permissions: any, inviterId: string, cb: any, ...args: any[]) => any;
    resendInvite: (inviteId: string, cb: any, ...args: any[]) => any;
    acceptInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    dismissInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    removeInvite: (email: string, inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Password reset
     */
    requestPasswordReset: (email: string, cb: any, ...args: any[]) => any;
    confirmPasswordReset: (payload: any, cb: any, ...args: any[]) => any;
    /**
     * Prescriptions
     */
    createPrescription: (clinicId: string, prescription: any, cb: any, ...args: any[]) => any;
    createPrescriptionRevision: (clinicId: string, revision: any, prescriptionId: string, cb: any, ...args: any[]) => any;
    deletePrescription: (clinicId: string, prescriptionId: string, cb: any, ...args: any[]) => any;
    getPrescriptionsForClinic: (clinicId: string, cb: any, ...args: any[]) => any;
    /**
     * Devices
     */
    getCGMDevices: (cb: any, ...args: any[]) => any;
    getPumpDevices: (cb: any, ...args: any[]) => any;
    /**
     * Clinics
     */
    getClinics: (options?: {
        limit?: number;
        offset?: number;
        email?: string;
    }, cb: Function) => Function;
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
        }[];
        clinicType?: string;
        clinicSize?: number;
        email: string;
    }, cb: Function) => Function;
    getClinic: (clinicId: string, cb: Function) => Function;
    getClinicByShareCode: (shareCode: string, cb: Function) => Function;
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
        }[];
        clinicType?: string; /**
         * format error with response body and session token
         *
         * @param {Error} err with the response body
         * @returns {Error}
         */
        clinicSize?: number;
        email: string;
    }, cb: Function) => Function;
    getCliniciansFromClinic: (clinicId: string, options?: {
        search?: string;
        offset?: number;
        limit?: number;
        email?: string;
    }, cb: Function) => Function;
    getClinician: (clinicId: string, clinicianId: string, cb: Function) => Function;
    updateClinician: (clinicId: string, clinicianId: string, clinician: {
        id: string;
        inviteId?: string;
        email: string;
        name: string;
        roles: string[];
    }, cb: Function) => Function;
    deleteClinicianFromClinic: (clinicId: string, clinicianId: string, cb: Function) => Function;
    deletePatientFromClinic: (clinicId: string, patientId: string, cb: Function) => Function;
    getPatientsForClinic: (clinicId: string, options?: {
        search?: string;
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
    createClinicCustodialAccount: (clinicId: string, patient: {
        email: string;
        fullName: string; /**
         * Find a user's preferences
         *
         * @param {String} userId id of the user you are finding the preferences of
         * @param cb
         * @returns {cb}  cb(err, response)
         */
        birthDate: string;
        mrn?: string;
        targetDevices?: string[];
    }, cb: Function) => void;
    getPatientFromClinic: (clinicId: string, patientId: string, cb: Function) => Function;
    updateClinicPatient: (clinicId: string, patientId: string, patient: {
        email: string;
        fullName: string;
        birthDate: string;
        mrn?: string;
        targetDevices?: string[];
    }, cb: Function) => Function;
    inviteClinician: (clinicId: string, clinician: {
        email: string;
        roles: string[];
    }, cb: Function) => void;
    getClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => Function;
    resendClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => void;
    deleteClinicianInvite: (clinicId: string, inviteId: string, cb: Function) => void;
    getPatientInvites: (clinicId: string, cb: Function) => Function;
    acceptPatientInvitation: (clinicId: string, inviteId: string, cb: Function) => Function;
    deletePatientInvitation: (clinicId: string, inviteId: string, cb: Function) => Function;
    updatePatientPermissions: (clinicId: string, patientId: string, permissions: any, cb: Function) => Function;
    getClinicsForPatient: (userId: string, options?: {
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
    getClinicianInvites: (userId: string, cb: Function) => Function;
    acceptClinicianInvite: (userId: string, inviteId: string, cb: Function) => Function;
    dismissClinicianInvite: (userId: string, inviteId: string, cb: Function) => void;
    getClinicsForClinician: (clinicianId: string, options?: {
        offset?: number;
        limit?: number;
    }, cb: Function) => Function;
    inviteClinic: (shareCode: string, permissions: any, patientId: string, cb: any, ...args: any[]) => any;
    triggerInitialClinicMigration: (clinicId: string, cb: Function, ...args: any[]) => Function;
    sendPatientUploadReminder: (clinicId: string, patientId: string, cb: Function) => void;
    createClinicPatientTag: (clinicId: string, patientTag: {
        name: string;
    }, cb: Function) => void;
    updateClinicPatientTag: (clinicId: string, patientTagId: string, patientTag: {
        name: string;
    }, cb: Function) => void;
    deleteClinicPatientTag: (clinicId: string, patientTagId: string, cb: Function) => void;
};
export = _exports;
