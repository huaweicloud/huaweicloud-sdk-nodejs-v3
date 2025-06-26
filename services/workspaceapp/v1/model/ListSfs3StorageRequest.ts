

export class ListSfs3StorageRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListSfs3StorageRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSfs3StorageRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListSfs3StorageRequest {
        this['name'] = name;
        return this;
    }
}