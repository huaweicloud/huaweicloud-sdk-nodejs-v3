

export class DeleteVaultTagRequest {
    public key?: string;
    private 'vault_id'?: string;
    public constructor(key?: string, vaultId?: string) { 
        this['key'] = key;
        this['vault_id'] = vaultId;
    }
    public withKey(key: string): DeleteVaultTagRequest {
        this['key'] = key;
        return this;
    }
    public withVaultId(vaultId: string): DeleteVaultTagRequest {
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