

export class RestorePoint {
    private 'instance_id'?: string;
    public type?: string;
    private 'backup_id'?: string;
    private 'restore_time'?: number;
    private 'database_name'?: { [key: string]: string; };
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): RestorePoint {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): RestorePoint {
        this['type'] = type;
        return this;
    }
    public withBackupId(backupId: string): RestorePoint {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: number): RestorePoint {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withDatabaseName(databaseName: { [key: string]: string; }): RestorePoint {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: { [key: string]: string; }  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): { [key: string]: string; } | undefined {
        return this['database_name'];
    }
}