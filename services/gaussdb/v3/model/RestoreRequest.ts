

export class RestoreRequest {
    private 'target_instance_id'?: string;
    private 'source_instance_id'?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: number;
    public type?: string;
    public constructor(targetInstanceId?: string, sourceInstanceId?: string, type?: string) { 
        this['target_instance_id'] = targetInstanceId;
        this['source_instance_id'] = sourceInstanceId;
        this['type'] = type;
    }
    public withTargetInstanceId(targetInstanceId: string): RestoreRequest {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withSourceInstanceId(sourceInstanceId: string): RestoreRequest {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withBackupId(backupId: string): RestoreRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: number): RestoreRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withType(type: string): RestoreRequest {
        this['type'] = type;
        return this;
    }
}