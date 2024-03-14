declare function _exports(common: any): {
    /**
     * Create a prescription
     *
     * @param {String} clinicId - id of the clinic
     * @param {Object} prescription - prescription to create
     * @param cb
     * @returns {cb} cb(err, response)
     */
    createPrescription: (clinicId: string, prescription: any, cb: any, ...args: any[]) => any;
    /**
     * Create a prescription revision
     *
     * @param {String} clinicId - id of the clinic
     * @param {Object} revision - prescription revision to create
     * @param {String} prescriptionId - prescription id to attach revision to
     * @param cb
     * @returns {cb} cb(err, response)
     */
    createPrescriptionRevision: (clinicId: string, revision: any, prescriptionId: string, cb: any, ...args: any[]) => any;
    /**
     * Delete a prescription
     *
     * @param {String} clinicId - id of the clinic
     * @param {String} prescriptionId - id of prescription to delete
     * @param cb
     * @returns {cb} cb(err, response)
     */
    deletePrescription: (clinicId: string, prescriptionId: string, cb: any, ...args: any[]) => any;
    /**
     * Get all prescriptions for a clinic
     *
     * @param {String} clinicId - id of the clinic
     * @param cb
     * @returns {cb} cb(err, response)
     */
    getPrescriptionsForClinic: (clinicId: string, cb: any, ...args: any[]) => any;
};
export = _exports;
