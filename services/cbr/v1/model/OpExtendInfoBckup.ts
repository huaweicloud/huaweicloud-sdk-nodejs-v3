

export class OpExtendInfoBckup {
    private 'app_consistency_error_code'?: string;
    private 'app_consistency_error_message'?: string;
    private 'app_consistency_status'?: OpExtendInfoBckupAppConsistencyStatusEnum | string;
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    public incremental?: OpExtendInfoBckupIncrementalEnum | string;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withAppConsistencyErrorCode(appConsistencyErrorCode: string): OpExtendInfoBckup {
        this['app_consistency_error_code'] = appConsistencyErrorCode;
        return this;
    }
    public set appConsistencyErrorCode(appConsistencyErrorCode: string  | undefined) {
        this['app_consistency_error_code'] = appConsistencyErrorCode;
    }
    public get appConsistencyErrorCode(): string | undefined {
        return this['app_consistency_error_code'];
    }
    public withAppConsistencyErrorMessage(appConsistencyErrorMessage: string): OpExtendInfoBckup {
        this['app_consistency_error_message'] = appConsistencyErrorMessage;
        return this;
    }
    public set appConsistencyErrorMessage(appConsistencyErrorMessage: string  | undefined) {
        this['app_consistency_error_message'] = appConsistencyErrorMessage;
    }
    public get appConsistencyErrorMessage(): string | undefined {
        return this['app_consistency_error_message'];
    }
    public withAppConsistencyStatus(appConsistencyStatus: OpExtendInfoBckupAppConsistencyStatusEnum | string): OpExtendInfoBckup {
        this['app_consistency_status'] = appConsistencyStatus;
        return this;
    }
    public set appConsistencyStatus(appConsistencyStatus: OpExtendInfoBckupAppConsistencyStatusEnum | string  | undefined) {
        this['app_consistency_status'] = appConsistencyStatus;
    }
    public get appConsistencyStatus(): OpExtendInfoBckupAppConsistencyStatusEnum | string | undefined {
        return this['app_consistency_status'];
    }
    public withBackupId(backupId: string): OpExtendInfoBckup {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): OpExtendInfoBckup {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withIncremental(incremental: OpExtendInfoBckupIncrementalEnum | string): OpExtendInfoBckup {
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
