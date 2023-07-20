import { VaultAddResourceReq } from './VaultAddResourceReq';


export class AddVaultResourceRequest {
    private 'vault_id'?: string;
    public body?: VaultAddResourceReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): AddVaultResourceRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultAddResourceReq): AddVaultResourceRequest {
        this['body'] = body;
        return this;
    }
}