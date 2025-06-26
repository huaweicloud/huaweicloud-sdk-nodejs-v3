

export class ListShareFolderRequest {
    public offset?: number;
    public limit?: number;
    private 'storage_id'?: string;
    private 'storage_claim_id'?: string;
    public path?: string;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withOffset(offset: number): ListShareFolderRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListShareFolderRequest {
        this['limit'] = limit;
        return this;
    }
    public withStorageId(storageId: string): ListShareFolderRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withStorageClaimId(storageClaimId: string): ListShareFolderRequest {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withPath(path: string): ListShareFolderRequest {
        this['path'] = path;
        return this;
    }
}