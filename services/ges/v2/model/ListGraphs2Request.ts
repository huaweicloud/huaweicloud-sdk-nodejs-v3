

export class ListGraphs2Request {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListGraphs2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGraphs2Request {
        this['limit'] = limit;
        return this;
    }
}