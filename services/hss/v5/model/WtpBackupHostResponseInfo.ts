

export class WtpBackupHostResponseInfo {
    private 'backup_host_ip'?: string;
    private 'backup_host_port'?: number;
    private 'backup_dir'?: string;
    private 'backup_host_status'?: number;
    private 'backup_host_name'?: string;
    private 'backup_host_id'?: string;
    public constructor() { 
    }
    public withBackupHostIp(backupHostIp: string): WtpBackupHostResponseInfo {
        this['backup_host_ip'] = backupHostIp;
        return this;
    }
    public set backupHostIp(backupHostIp: string  | undefined) {
        this['backup_host_ip'] = backupHostIp;
    }
    public get backupHostIp(): string | undefined {
        return this['backup_host_ip'];
    }
    public withBackupHostPort(backupHostPort: number): WtpBackupHostResponseInfo {
        this['backup_host_port'] = backupHostPort;
        return this;
    }
    public set backupHostPort(backupHostPort: number  | undefined) {
        this['backup_host_port'] = backupHostPort;
    }
    public get backupHostPort(): number | undefined {
        return this['backup_host_port'];
    }
    public withBackupDir(backupDir: string): WtpBackupHostResponseInfo {
        this['backup_dir'] = backupDir;
        return this;
    }
    public set backupDir(backupDir: string  | undefined) {
        this['backup_dir'] = backupDir;
    }
    public get backupDir(): string | undefined {
        return this['backup_dir'];
    }
    public withBackupHostStatus(backupHostStatus: number): WtpBackupHostResponseInfo {
        this['backup_host_status'] = backupHostStatus;
        return this;
    }
    public set backupHostStatus(backupHostStatus: number  | undefined) {
        this['backup_host_status'] = backupHostStatus;
    }
    public get backupHostStatus(): number | undefined {
        return this['backup_host_status'];
    }
    public withBackupHostName(backupHostName: string): WtpBackupHostResponseInfo {
        this['backup_host_name'] = backupHostName;
        return this;
    }
    public set backupHostName(backupHostName: string  | undefined) {
        this['backup_host_name'] = backupHostName;
    }
    public get backupHostName(): string | undefined {
        return this['backup_host_name'];
    }
    public withBackupHostId(backupHostId: string): WtpBackupHostResponseInfo {
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