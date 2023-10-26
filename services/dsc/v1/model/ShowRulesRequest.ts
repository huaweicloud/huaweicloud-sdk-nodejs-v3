

export class ShowRulesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ShowRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRulesRequest {
        this['limit'] = limit;
        return this;
    }
}