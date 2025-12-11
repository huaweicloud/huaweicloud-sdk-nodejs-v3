

export class ListRestorableInstancesDetailsRequest {
    private 'X-Language'?: string;
    private 'source_instance_id'?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: string;
    public offset?: number;
    public limit?: number;
    private 'backup_restore_type'?: string;
    private 'source_backup_schema'?: string;
    private 'target_instance_id'?: string;
    private 'instance_name'?: string;
    public constructor(sourceInstanceId?: string) { 
        this['source_instance_id'] = sourceInstanceId;
    }
    public withXLanguage(xLanguage: string): ListRestorableInstancesDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withSourceInstanceId(sourceInstanceId: string): ListRestorableInstancesDetailsRequest {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withBackupId(backupId: string): ListRestorableInstancesDetailsRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: string): ListRestorableInstancesDetailsRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withOffset(offset: number): ListRestorableInstancesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestorableInstancesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBackupRestoreType(backupRestoreType: string): ListRestorableInstancesDetailsRequest {
        this['backup_restore_type'] = backupRestoreType;
        return this;
    }
    public set backupRestoreType(backupRestoreType: string  | undefined) {
        this['backup_restore_type'] = backupRestoreType;
    }
    public get backupRestoreType(): string | undefined {
        return this['backup_restore_type'];
    }
    public withSourceBackupSchema(sourceBackupSchema: string): ListRestorableInstancesDetailsRequest {
        this['source_backup_schema'] = sourceBackupSchema;
        return this;
    }
    public set sourceBackupSchema(sourceBackupSchema: string  | undefined) {
        this['source_backup_schema'] = sourceBackupSchema;
    }
    public get sourceBackupSchema(): string | undefined {
        return this['source_backup_schema'];
    }
    public withTargetInstanceId(targetInstanceId: string): ListRestorableInstancesDetailsRequest {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withInstanceName(instanceName: string): ListRestorableInstancesDetailsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}