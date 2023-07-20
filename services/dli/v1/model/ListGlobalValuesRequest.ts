

export class ListGlobalValuesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalValuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalValuesRequest {
        this['offset'] = offset;
        return this;
    }
}