

export class ListKeyStoresRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListKeyStoresRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListKeyStoresRequest {
        this['offset'] = offset;
        return this;
    }
}