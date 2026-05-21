

export class RestoreMetaDataSource {
    private 'restore_time'?: number;
    private 'backup_id'?: string;
    public constructor() { 
    }
    public withRestoreTime(restoreTime: number): RestoreMetaDataSource {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withBackupId(backupId: string): RestoreMetaDataSource {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
}