

export class ListRestorableInstancesRequest {
    private 'X-Language'?: string;
    private 'source_instance_id'?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(sourceInstanceId?: string) { 
        this['source_instance_id'] = sourceInstanceId;
    }
    public withXLanguage(xLanguage: string): ListRestorableInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withSourceInstanceId(sourceInstanceId: string): ListRestorableInstancesRequest {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withBackupId(backupId: string): ListRestorableInstancesRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: string): ListRestorableInstancesRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withOffset(offset: number): ListRestorableInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestorableInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}