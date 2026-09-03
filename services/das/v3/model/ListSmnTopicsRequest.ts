

export class ListSmnTopicsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListSmnTopicsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSmnTopicsRequest {
        this['limit'] = limit;
        return this;
    }
}