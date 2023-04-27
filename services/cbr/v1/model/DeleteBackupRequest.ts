

export class DeleteBackupRequest {
    private 'backup_id': string | undefined;
    public constructor(backupId?: any) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): DeleteBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
}