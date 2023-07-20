import { VaultRemoveResourceReq } from './VaultRemoveResourceReq';


export class RemoveVaultResourceRequest {
    private 'vault_id'?: string;
    public body?: VaultRemoveResourceReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): RemoveVaultResourceRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultRemoveResourceReq): RemoveVaultResourceRequest {
        this['body'] = body;
        return this;
    }
}