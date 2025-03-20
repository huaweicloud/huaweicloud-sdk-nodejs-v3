

export class ListCceCompliantRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListCceCompliantRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCceCompliantRequest {
        this['limit'] = limit;
        return this;
    }
}