

export class ShowVaultTagRequest {
    private 'vault_id'?: string;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): ShowVaultTagRequest {
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