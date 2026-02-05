

export class ListVoicesRequest {
    public limit?: number;
    public offset?: string;
    public constructor(limit?: number, offset?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withLimit(limit: number): ListVoicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListVoicesRequest {
        this['offset'] = offset;
        return this;
    }
}