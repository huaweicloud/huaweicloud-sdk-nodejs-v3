

export class HostVaultInfoDefaultVault {
    private 'vault_name'?: string;
    private 'vault_id'?: string;
    public constructor() { 
    }
    public withVaultName(vaultName: string): HostVaultInfoDefaultVault {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string  | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName(): string | undefined {
        return this['vault_name'];
    }
    public withVaultId(vaultId: string): HostVaultInfoDefaultVault {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}