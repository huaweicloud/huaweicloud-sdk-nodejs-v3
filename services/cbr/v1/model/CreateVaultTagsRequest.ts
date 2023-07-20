import { VaultTagsCreateReq } from './VaultTagsCreateReq';


export class CreateVaultTagsRequest {
    private 'vault_id'?: string;
    public body?: VaultTagsCreateReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): CreateVaultTagsRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: VaultTagsCreateReq): CreateVaultTagsRequest {
        this['body'] = body;
        return this;
    }
}