

export class ListEpsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListEpsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEpsRequest {
        this['limit'] = limit;
        return this;
    }
}