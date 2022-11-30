

export class BackupRecordResponse {
    private 'backup_id'?: string | undefined;
    public period?: string;
    private 'backup_name'?: string | undefined;
    private 'instance_id'?: string | undefined;
    public size?: number;
    private 'backup_type'?: BackupRecordResponseBackupTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public progress?: string;
    private 'error_code'?: string | undefined;
    public remark?: string;
    public status?: BackupRecordResponseStatusEnum;
    private 'is_support_restore'?: string | undefined;
    public constructor() { 
    }
    public withBackupId(backupId: string): BackupRecordResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withPeriod(period: string): BackupRecordResponse {
        this['period'] = period;
        return this;
    }
    public withBackupName(backupName: string): BackupRecordResponse {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName() {
        return this['backup_name'];
    }
    public withInstanceId(instanceId: string): BackupRecordResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withSize(size: number): BackupRecordResponse {
        this['size'] = size;
        return this;
    }
    public withBackupType(backupType: BackupRecordResponseBackupTypeEnum): BackupRecordResponse {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: BackupRecordResponseBackupTypeEnum | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType() {
        return this['backup_type'];
    }
    public withCreatedAt(createdAt: string): BackupRecordResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): BackupRecordResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProgress(progress: string): BackupRecordResponse {
        this['progress'] = progress;
        return this;
    }
    public withErrorCode(errorCode: string): BackupRecordResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withRemark(remark: string): BackupRecordResponse {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: BackupRecordResponseStatusEnum): BackupRecordResponse {
        this['status'] = status;
        return this;
    }
    public withIsSupportRestore(isSupportRestore: string): BackupRecordResponse {
        this['is_support_restore'] = isSupportRestore;
        return this;
    }
    public set isSupportRestore(isSupportRestore: string | undefined) {
        this['is_support_restore'] = isSupportRestore;
    }
    public get isSupportRestore() {
        return this['is_support_restore'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupRecordResponseBackupTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupRecordResponseStatusEnum {
    WAITING = 'waiting',
    BACKUPING = 'backuping',
    SUCCEED = 'succeed',
    FAILED = 'failed',
    EXPIRED = 'expired',
    DELETED = 'deleted'
}
