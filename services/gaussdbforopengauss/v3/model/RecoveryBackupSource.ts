

export class RecoveryBackupSource {
    private 'instance_id'?: string;
    public type?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: string;
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): RecoveryBackupSource {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): RecoveryBackupSource {
        this['type'] = type;
        return this;
    }
    public withBackupId(backupId: string): RecoveryBackupSource {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: string): RecoveryBackupSource {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
}