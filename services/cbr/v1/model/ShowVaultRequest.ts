

export class ShowVaultRequest {
    private 'vault_id': string | undefined;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): ShowVaultRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}