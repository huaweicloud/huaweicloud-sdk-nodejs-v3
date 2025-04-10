

export class ListBackupVaultsRequest {
    public offset?: number;
    public limit?: number;
    private 'vault_name'?: string;
    private 'vault_id'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ListBackupVaultsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackupVaultsRequest {
        this['limit'] = limit;
        return this;
    }
    public withVaultName(vaultName: string): ListBackupVaultsRequest {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string  | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName(): string | undefined {
        return this['vault_name'];
    }
    public withVaultId(vaultId: string): ListBackupVaultsRequest {
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