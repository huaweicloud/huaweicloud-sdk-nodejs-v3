import { BulkCreateAndDeleteVaultTagsReq } from './BulkCreateAndDeleteVaultTagsReq';


export class BatchCreateAndDeleteVaultTagsRequest {
    private 'vault_id'?: string;
    public body?: BulkCreateAndDeleteVaultTagsReq;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withVaultId(vaultId: string): BatchCreateAndDeleteVaultTagsRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withBody(body: BulkCreateAndDeleteVaultTagsReq): BatchCreateAndDeleteVaultTagsRequest {
        this['body'] = body;
        return this;
    }
}