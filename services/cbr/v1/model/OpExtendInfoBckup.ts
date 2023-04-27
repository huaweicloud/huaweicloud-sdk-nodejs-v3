

export class OpExtendInfoBckup {
    private 'app_consistency_error_code'?: string | undefined;
    private 'app_consistency_error_message'?: string | undefined;
    private 'app_consistency_status'?: OpExtendInfoBckupAppConsistencyStatusEnum | undefined;
    private 'backup_id': string | undefined;
    private 'backup_name'?: string | undefined;
    public incremental?: OpExtendInfoBckupIncrementalEnum;
    public constructor(backupId?: any) { 
        this['backup_id'] = backupId;
    }
    public withAppConsistencyErrorCode(appConsistencyErrorCode: string): OpExtendInfoBckup {
        this['app_consistency_error_code'] = appConsistencyErrorCode;
        return this;
    }
    public set appConsistencyErrorCode(appConsistencyErrorCode: string | undefined) {
        this['app_consistency_error_code'] = appConsistencyErrorCode;
    }
    public get appConsistencyErrorCode() {
        return this['app_consistency_error_code'];
    }
    public withAppConsistencyErrorMessage(appConsistencyErrorMessage: string): OpExtendInfoBckup {
        this['app_consistency_error_message'] = appConsistencyErrorMessage;
        return this;
    }
    public set appConsistencyErrorMessage(appConsistencyErrorMessage: string | undefined) {
        this['app_consistency_error_message'] = appConsistencyErrorMessage;
    }
    public get appConsistencyErrorMessage() {
        return this['app_consistency_error_message'];
    }
    public withAppConsistencyStatus(appConsistencyStatus: OpExtendInfoBckupAppConsistencyStatusEnum): OpExtendInfoBckup {
        this['app_consistency_status'] = appConsistencyStatus;
        return this;
    }
    public set appConsistencyStatus(appConsistencyStatus: OpExtendInfoBckupAppConsistencyStatusEnum | undefined) {
        this['app_consistency_status'] = appConsistencyStatus;
    }
    public get appConsistencyStatus() {
        return this['app_consistency_status'];
    }
    public withBackupId(backupId: string): OpExtendInfoBckup {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): OpExtendInfoBckup {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName() {
        return this['backup_name'];
    }
    public withIncremental(incremental: OpExtendInfoBckupIncrementalEnum): OpExtendInfoBckup {
        this['incremental'] = incremental;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpExtendInfoBckupAppConsistencyStatusEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum OpExtendInfoBckupIncrementalEnum {
    TRUE = '\"true\"',
    FALSE = '\"false\"'
}
