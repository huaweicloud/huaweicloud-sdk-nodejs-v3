import { VaultTagsCreateReq } from './VaultTagsCreateReq';


export class CreateVaultTagsRequest {
    private 'vault_id': string | undefined;
    public body?: VaultTagsCreateReq;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): CreateVaultTagsRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withBody(body: VaultTagsCreateReq): CreateVaultTagsRequest {
        this['body'] = body;
        return this;
    }
}