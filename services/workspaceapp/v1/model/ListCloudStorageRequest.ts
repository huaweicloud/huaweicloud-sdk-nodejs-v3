

export class ListCloudStorageRequest {
    public offset?: number;
    public limit?: number;
    private 'storage_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListCloudStorageRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudStorageRequest {
        this['limit'] = limit;
        return this;
    }
    public withStorageId(storageId: string): ListCloudStorageRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withName(name: string): ListCloudStorageRequest {
        this['name'] = name;
        return this;
    }
}