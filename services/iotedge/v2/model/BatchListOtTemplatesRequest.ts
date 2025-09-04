

export class BatchListOtTemplatesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): BatchListOtTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListOtTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}