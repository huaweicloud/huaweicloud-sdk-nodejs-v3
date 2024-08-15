

export class ListBaseRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListBaseRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBaseRequest {
        this['offset'] = offset;
        return this;
    }
}