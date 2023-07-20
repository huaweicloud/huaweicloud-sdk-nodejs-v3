

export class MysqlRestorePoint {
    private 'restore_time'?: number;
    private 'source_instance_id'?: string;
    private 'backup_id'?: string;
    public type?: string;
    public constructor(sourceInstanceId?: string) { 
        this['source_instance_id'] = sourceInstanceId;
    }
    public withRestoreTime(restoreTime: number): MysqlRestorePoint {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withSourceInstanceId(sourceInstanceId: string): MysqlRestorePoint {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withBackupId(backupId: string): MysqlRestorePoint {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withType(type: string): MysqlRestorePoint {
        this['type'] = type;
        return this;
    }
}