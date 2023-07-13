import { VaultAddResourceReq } from './VaultAddResourceReq';


export class AddVaultResourceRequest {
    private 'vault_id': string | undefined;
    public body?: VaultAddResourceReq;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): AddVaultResourceRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultAddResourceReq): AddVaultResourceRequest {
        this['body'] = body;
        return this;
    }
}