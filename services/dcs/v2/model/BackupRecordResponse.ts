

export class BackupRecordResponse {
    private 'backup_id'?: string;
    public period?: string;
    private 'backup_name'?: string;
    private 'instance_id'?: string;
    public size?: number;
    private 'backup_type'?: BackupRecordResponseBackupTypeEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public progress?: string;
    private 'error_code'?: string;
    public remark?: string;
    public status?: BackupRecordResponseStatusEnum | string;
    private 'is_support_restore'?: string;
    private 'backup_format'?: BackupRecordResponseBackupFormatEnum | string;
    private 'execution_at'?: string;
    public constructor() { 
    }
    public withBackupId(backupId: string): BackupRecordResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
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
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withInstanceId(instanceId: string): BackupRecordResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSize(size: number): BackupRecordResponse {
        this['size'] = size;
        return this;
    }
    public withBackupType(backupType: BackupRecordResponseBackupTypeEnum | string): BackupRecordResponse {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: BackupRecordResponseBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): BackupRecordResponseBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
    public withCreatedAt(createdAt: string): BackupRecordResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): BackupRecordResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
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
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withRemark(remark: string): BackupRecordResponse {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: BackupRecordResponseStatusEnum | string): BackupRecordResponse {
        this['status'] = status;
        return this;
    }
    public withIsSupportRestore(isSupportRestore: string): BackupRecordResponse {
        this['is_support_restore'] = isSupportRestore;
        return this;
    }
    public set isSupportRestore(isSupportRestore: string  | undefined) {
        this['is_support_restore'] = isSupportRestore;
    }
    public get isSupportRestore(): string | undefined {
        return this['is_support_restore'];
    }
    public withBackupFormat(backupFormat: BackupRecordResponseBackupFormatEnum | string): BackupRecordResponse {
        this['backup_format'] = backupFormat;
        return this;
    }
    public set backupFormat(backupFormat: BackupRecordResponseBackupFormatEnum | string  | undefined) {
        this['backup_format'] = backupFormat;
    }
    public get backupFormat(): BackupRecordResponseBackupFormatEnum | string | undefined {
        return this['backup_format'];
    }
    public withExecutionAt(executionAt: string): BackupRecordResponse {
        this['execution_at'] = executionAt;
        return this;
    }
    public set executionAt(executionAt: string  | undefined) {
        this['execution_at'] = executionAt;
    }
    public get executionAt(): string | undefined {
        return this['execution_at'];
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
/**
    * @export
    * @enum {string}
    */
export enum BackupRecordResponseBackupFormatEnum {
    AOF = 'aof',
    RDB = 'rdb'
}
