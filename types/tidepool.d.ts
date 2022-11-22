declare function _exports(options: any): {
    initialize: (cb: any) => any;
    getUploadUrl: () => any;
    hasDataHost: () => boolean;
    setApiHost: (newhost: any) => void;
    setUploadHost: (newhost: any) => void;
    setDataHost: (newhost: any) => void;
    setBlipHost: (newhost: any) => void;
    makeBlipUrl: (path: any, extra: any) => any;
    trackMetric: (eventname: any, properties: any, cb: any) => any;
    logAppError: (error: any, message: any, properties: any, cb: any) => any;
    addOrUpdatePreferences: (userId: string, preferences: any, cb: any) => any;
    addOrUpdateProfile: (userId: string, profile: any, cb: any) => any;
    addOrUpdateSettings: (userId: string, settings: any, cb: any) => any;
    findPreferences: (userId: string, cb: any) => any;
    findProfile: (userId: string, cb: any) => any;
    findSettings: (userId: string, cb: any) => any;
    getTeamMembers: (userId: string, cb: any, ...args: any[]) => any;
    getViewableUsers: (userId: string, cb: any, ...args: any[]) => any;
    getAssociatedUsersDetails: (userId: string, cb: any, ...args: any[]) => any;
    getUploadGroups: (userId: string, cb: any, ...args: any[]) => any;
    setAccessPermissions: (userId: any, permissions: any, cb: any) => any;
    setAccessPermissionsOnGroup: (groupId: any, userId: any, permissions: any, cb: any, ...args: any[]) => void;
    getAccessPermissionsForGroup: (groupId: any, userId: any, cb: any, ...args: any[]) => void;
    getPatientsInfo: (patientIds: any[], cb: any, ...args: any[]) => any;
    getDeviceDataForUser: (userId: string, options: any, cb: any, ...args: any[]) => any;
    checkUploadVersions: (cb: any, ...args: any[]) => any;
    getTime: (cb: any) => any;
    getDataSourcesForUser: (userId: string, cb: any, ...args: any[]) => any;
    createDatasetForUser: (userId: string, info: any, cb: any, ...args: any[]) => any;
    finalizeDataset: (datasetId: string, cb: any, ...args: any[]) => any;
    addDataToDataset: (datasetId: string, data: any, cb: any, ...args: any[]) => any;
    uploadDeviceDataForUser: (userId: string, data: any, cb: any, ...args: any[]) => any;
    uploadBlobForUser: (userId: string, blob: any, contentType: string, digest: any, cb: any, ...args: any[]) => any;
    startUploadSession: (sessionInfo: any, cb: any, ...args: any[]) => any;
    uploadCarelinkDataForUser: (formData: any, cb: any, ...args: any[]) => any;
    getCarelinkData: (dataId: string, cb: any, ...args: any[]) => any;
    getUploadRecordsForDevice: (userId: string, deviceId: string, size: string, cb: any, ...args: any[]) => any;
    getAllMessagesForUser: (userId: string, options: {
        start: string;
        end: string;
    }, cb: any, ...args: any[]) => any;
    getNotesForUser: (userId: string, options: {
        start: string;
        end: string;
    }, cb: any, ...args: any[]) => any;
    replyToMessageThread: (comment: {
        timestamp: string;
        messagetext: string;
        groupid: string;
        userid: string;
        parentmessage: string;
    }, cb: any, ...args: any[]) => any;
    startMessageThread: (message: {
        messagetext: string;
        timestamp: string;
        groupid: string;
        userid: string;
    }, cb: any, ...args: any[]) => any;
    getMessageThread: (messageId: string, cb: any, ...args: any[]) => any;
    editMessage: (edits: {
        id: string;
        messagetext: string;
        timestamp: string;
    }, cb: any, ...args: any[]) => any;
    getExportDataURL: (userId: string, loggedInUserId: string, options: {
        format: string;
        startDate: string;
        endDate: string;
    }, cb: any, ...args: any[]) => any;
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
    signupStart: (invitedId: string, cb: any, ...args: any[]) => any;
    signupConfirm: (signupId: string, cb: any, ...args: any[]) => any;
    custodialSignupConfirm: (signupId: string, birthday: string, password: string, cb: any, ...args: any[]) => any;
    signupResend: (email: string, cb: any, ...args: any[]) => any;
    signupCancel: (invitedId: any, cb: any, ...args: any[]) => any;
    invitesSent: (inviterId: string, cb: any, ...args: any[]) => any;
    invitesReceived: (inviteeId: string, cb: any, ...args: any[]) => any;
    inviteUser: (email: string, permissions: any, inviterId: string, cb: any, ...args: any[]) => any;
    resendInvite: (inviteId: string, cb: any, ...args: any[]) => any;
    acceptInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    dismissInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    removeInvite: (email: string, inviterId: string, cb: any, ...args: any[]) => any;
    requestPasswordReset: (email: string, cb: any, ...args: any[]) => any;
    confirmPasswordReset: (payload: any, cb: any, ...args: any[]) => any;
    createPrescription: (clinicId: string, prescription: any, cb: any, ...args: any[]) => any;
    createPrescriptionRevision: (clinicId: string, revision: any, prescriptionId: string, cb: any, ...args: any[]) => any;
    deletePrescription: (clinicId: string, prescriptionId: string, cb: any, ...args: any[]) => any;
    getPrescriptionsForClinic: (clinicId: string, cb: any, ...args: any[]) => any;
    getCGMDevices: (cb: any, ...args: any[]) => any;
    getPumpDevices: (cb: any, ...args: any[]) => any;
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
        clinicType?: string;
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
        fullName: string;
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
declare namespace _exports {
    export { makeClient as client };
}
export = _exports;
import makeClient = require("./index");
