

export class ListNoticesRequest {
    public limit?: number;
    public offset?: number;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withLimit(limit: number): ListNoticesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListNoticesRequest {
        this['offset'] = offset;
        return this;
    }
}