

export class ShowTopicsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ShowTopicsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTopicsRequest {
        this['limit'] = limit;
        return this;
    }
}