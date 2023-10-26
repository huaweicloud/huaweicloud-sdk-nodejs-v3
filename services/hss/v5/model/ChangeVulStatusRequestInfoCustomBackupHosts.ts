

export class ChangeVulStatusRequestInfoCustomBackupHosts {
    private 'host_id'?: string;
    private 'vault_id'?: string;
    private 'backup_name'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): ChangeVulStatusRequestInfoCustomBackupHosts {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVaultId(vaultId: string): ChangeVulStatusRequestInfoCustomBackupHosts {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBackupName(backupName: string): ChangeVulStatusRequestInfoCustomBackupHosts {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
}