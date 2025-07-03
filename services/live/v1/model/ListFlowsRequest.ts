

export class ListFlowsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListFlowsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFlowsRequest {
        this['offset'] = offset;
        return this;
    }
}