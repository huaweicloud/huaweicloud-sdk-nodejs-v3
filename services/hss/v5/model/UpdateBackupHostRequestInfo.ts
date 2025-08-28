

export class UpdateBackupHostRequestInfo {
    private 'host_id'?: string;
    private 'backup_host_ip'?: string;
    private 'backup_host_port'?: number;
    private 'backup_dir'?: string;
    public constructor(hostId?: string, backupHostIp?: string, backupHostPort?: number, backupDir?: string) { 
        this['host_id'] = hostId;
        this['backup_host_ip'] = backupHostIp;
        this['backup_host_port'] = backupHostPort;
        this['backup_dir'] = backupDir;
    }
    public withHostId(hostId: string): UpdateBackupHostRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBackupHostIp(backupHostIp: string): UpdateBackupHostRequestInfo {
        this['backup_host_ip'] = backupHostIp;
        return this;
    }
    public set backupHostIp(backupHostIp: string  | undefined) {
        this['backup_host_ip'] = backupHostIp;
    }
    public get backupHostIp(): string | undefined {
        return this['backup_host_ip'];
    }
    public withBackupHostPort(backupHostPort: number): UpdateBackupHostRequestInfo {
        this['backup_host_port'] = backupHostPort;
        return this;
    }
    public set backupHostPort(backupHostPort: number  | undefined) {
        this['backup_host_port'] = backupHostPort;
    }
    public get backupHostPort(): number | undefined {
        return this['backup_host_port'];
    }
    public withBackupDir(backupDir: string): UpdateBackupHostRequestInfo {
        this['backup_dir'] = backupDir;
        return this;
    }
    public set backupDir(backupDir: string  | undefined) {
        this['backup_dir'] = backupDir;
    }
    public get backupDir(): string | undefined {
        return this['backup_dir'];
    }
}