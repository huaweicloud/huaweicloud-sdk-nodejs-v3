

export class BackupRestoreServerMapping {
    private 'backup_id'?: string;
    private 'volume_id'?: string;
    public constructor(backupId?: string, volumeId?: string) { 
        this['backup_id'] = backupId;
        this['volume_id'] = volumeId;
    }
    public withBackupId(backupId: string): BackupRestoreServerMapping {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withVolumeId(volumeId: string): BackupRestoreServerMapping {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}