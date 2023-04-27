

export class ShowVaultTagRequest {
    private 'vault_id': string | undefined;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): ShowVaultTagRequest {
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