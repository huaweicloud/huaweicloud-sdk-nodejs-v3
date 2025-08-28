

export class SetRemoteBackupInfoRequestInfo {
    private 'remote_backup'?: boolean;
    private 'backup_addr'?: string;
    private 'backup_host_id'?: string;
    public constructor(remoteBackup?: boolean) { 
        this['remote_backup'] = remoteBackup;
    }
    public withRemoteBackup(remoteBackup: boolean): SetRemoteBackupInfoRequestInfo {
        this['remote_backup'] = remoteBackup;
        return this;
    }
    public set remoteBackup(remoteBackup: boolean  | undefined) {
        this['remote_backup'] = remoteBackup;
    }
    public get remoteBackup(): boolean | undefined {
        return this['remote_backup'];
    }
    public withBackupAddr(backupAddr: string): SetRemoteBackupInfoRequestInfo {
        this['backup_addr'] = backupAddr;
        return this;
    }
    public set backupAddr(backupAddr: string  | undefined) {
        this['backup_addr'] = backupAddr;
    }
    public get backupAddr(): string | undefined {
        return this['backup_addr'];
    }
    public withBackupHostId(backupHostId: string): SetRemoteBackupInfoRequestInfo {
        this['backup_host_id'] = backupHostId;
        return this;
    }
    public set backupHostId(backupHostId: string  | undefined) {
        this['backup_host_id'] = backupHostId;
    }
    public get backupHostId(): string | undefined {
        return this['backup_host_id'];
    }
}