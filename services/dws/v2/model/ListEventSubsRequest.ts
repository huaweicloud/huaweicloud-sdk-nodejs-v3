

export class ListEventSubsRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListEventSubsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListEventSubsRequest {
        this['limit'] = limit;
        return this;
    }
}