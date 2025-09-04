

export class BatchListAppConfigsTemplatesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): BatchListAppConfigsTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListAppConfigsTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}