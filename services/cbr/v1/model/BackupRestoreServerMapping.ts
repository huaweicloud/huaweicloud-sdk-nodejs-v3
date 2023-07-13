

export class BackupRestoreServerMapping {
    private 'backup_id': string | undefined;
    private 'volume_id': string | undefined;
    public constructor(backupId?: any, volumeId?: any) { 
        this['backup_id'] = backupId;
        this['volume_id'] = volumeId;
    }
    public withBackupId(backupId: string): BackupRestoreServerMapping {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withVolumeId(volumeId: string): BackupRestoreServerMapping {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}