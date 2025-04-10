

export class WtpRemoteBackupResponseInfo {
    private 'backup_addr'?: string;
    private 'backup_host_id'?: string;
    private 'backup_host_name'?: string;
    private 'remote_backup'?: boolean;
    public constructor() { 
    }
    public withBackupAddr(backupAddr: string): WtpRemoteBackupResponseInfo {
        this['backup_addr'] = backupAddr;
        return this;
    }
    public set backupAddr(backupAddr: string  | undefined) {
        this['backup_addr'] = backupAddr;
    }
    public get backupAddr(): string | undefined {
        return this['backup_addr'];
    }
    public withBackupHostId(backupHostId: string): WtpRemoteBackupResponseInfo {
        this['backup_host_id'] = backupHostId;
        return this;
    }
    public set backupHostId(backupHostId: string  | undefined) {
        this['backup_host_id'] = backupHostId;
    }
    public get backupHostId(): string | undefined {
        return this['backup_host_id'];
    }
    public withBackupHostName(backupHostName: string): WtpRemoteBackupResponseInfo {
        this['backup_host_name'] = backupHostName;
        return this;
    }
    public set backupHostName(backupHostName: string  | undefined) {
        this['backup_host_name'] = backupHostName;
    }
    public get backupHostName(): string | undefined {
        return this['backup_host_name'];
    }
    public withRemoteBackup(remoteBackup: boolean): WtpRemoteBackupResponseInfo {
        this['remote_backup'] = remoteBackup;
        return this;
    }
    public set remoteBackup(remoteBackup: boolean  | undefined) {
        this['remote_backup'] = remoteBackup;
    }
    public get remoteBackup(): boolean | undefined {
        return this['remote_backup'];
    }
}