

export class ListPersistentStorageRequest {
    public offset?: number;
    public limit?: number;
    private 'storage_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListPersistentStorageRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPersistentStorageRequest {
        this['limit'] = limit;
        return this;
    }
    public withStorageId(storageId: string): ListPersistentStorageRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withName(name: string): ListPersistentStorageRequest {
        this['name'] = name;
        return this;
    }
}