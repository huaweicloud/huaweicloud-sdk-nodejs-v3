

export class ListGlobalVariablesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalVariablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalVariablesRequest {
        this['offset'] = offset;
        return this;
    }
}