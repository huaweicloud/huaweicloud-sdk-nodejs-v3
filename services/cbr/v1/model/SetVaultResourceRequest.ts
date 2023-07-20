import { VaultSetResourceReq } from './VaultSetResourceReq';


export class SetVaultResourceRequest {
    private 'vault_id'?: string;
    public body?: VaultSetResourceReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): SetVaultResourceRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultSetResourceReq): SetVaultResourceRequest {
        this['body'] = body;
        return this;
    }
}