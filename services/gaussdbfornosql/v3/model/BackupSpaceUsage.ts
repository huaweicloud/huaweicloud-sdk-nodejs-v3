

export class BackupSpaceUsage {
    private 'backup_usage'?: number;
    public constructor() { 
    }
    public withBackupUsage(backupUsage: number): BackupSpaceUsage {
        this['backup_usage'] = backupUsage;
        return this;
    }
    public set backupUsage(backupUsage: number  | undefined) {
        this['backup_usage'] = backupUsage;
    }
    public get backupUsage(): number | undefined {
        return this['backup_usage'];
    }
}