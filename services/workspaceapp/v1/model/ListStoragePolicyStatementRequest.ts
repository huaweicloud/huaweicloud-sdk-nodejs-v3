

export class ListStoragePolicyStatementRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListStoragePolicyStatementRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListStoragePolicyStatementRequest {
        this['limit'] = limit;
        return this;
    }
}