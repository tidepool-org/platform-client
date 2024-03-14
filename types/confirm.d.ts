declare function _exports(common: any, deps: any): {
    /**
     * Start signup
     *
     * @param {String} invitedId - id of the user that signup if for
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    signupStart: (invitedId: string, cb: any, ...args: any[]) => any;
    /**
     * Confirm a signup
     *
     * @param {String} signupId - id of the signup confirmation
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    signupConfirm: (signupId: string, cb: any, ...args: any[]) => any;
    /**
     * Verify a custodial signup with birthday and password
     *
     * @param {String} signupId - id of the signup confirmation
     * @param {String} birthday - birthday of the signup
     * @param {String} password - password of the signup
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    custodialSignupConfirm: (signupId: string, birthday: string, password: string, cb: any, ...args: any[]) => any;
    /**
     * Resend an existing invite
     *
     * @param {String} email - email of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err)
     */
    signupResend: (email: string, cb: any, ...args: any[]) => any;
    /**
     * Cancel an existing invite
     *
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    signupCancel: (invitedId: any, cb: any, ...args: any[]) => any;
    /**
     * Get the invites sent
     *
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    invitesSent: (inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Get the invites received
     *
     * @param {String} inviteeId - id of the user who was invited
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    invitesReceived: (inviteeId: string, cb: any, ...args: any[]) => any;
    /**
     * Invite a user
     *
     * @param {String} email - email of the user to invite
     * @param {Object} permissions - permissions to be given
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    inviteUser: (email: string, permissions: any, inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Resend an invite
     *
     * @param {String} inviteId
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    resendInvite: (inviteId: string, cb: any, ...args: any[]) => any;
    /**
     * Accept the invite
     *
     * @param {String} inviteId
     * @param {String} inviteeId - id of the user who was invited
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    acceptInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Dismiss the invite
     *
     * @param {String} inviteId
     * @param {String} inviteeId - id of the user who was invited
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    dismissInvite: (inviteId: string, inviteeId: string, inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Remove the invite
     *
     * @param {String} email - email of the user to remove
     * @param {String} inviterId - id of the user that send the invite
     * @param cb
     * @returns {cb}  cb(err, response)
     */
    removeInvite: (email: string, inviterId: string, cb: any, ...args: any[]) => any;
    /**
     * Request a password reset
     *
     * @param {String} email - email of the user requesting the password reset
     * @param cb
     * @returns {cb}  cb(err)
     */
    requestPasswordReset: (email: string, cb: any, ...args: any[]) => any;
    /**
     * Confirm a password reset request with a new password
     *
     * @param {Object} payload - object with `key`, `email`, `password`
     * @param cb
     * @returns {cb}  cb(err)
     */
    confirmPasswordReset: (payload: any, cb: any, ...args: any[]) => any;
};
export = _exports;
