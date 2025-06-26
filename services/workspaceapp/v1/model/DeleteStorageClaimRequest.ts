import { DeleteStorageClaimReq } from './DeleteStorageClaimReq';


export class DeleteStorageClaimRequest {
    private 'storage_id'?: string;
    public body?: DeleteStorageClaimReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): DeleteStorageClaimRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: DeleteStorageClaimReq): DeleteStorageClaimRequest {
        this['body'] = body;
        return this;
    }
}