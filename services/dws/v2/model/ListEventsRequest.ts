

export class ListEventsRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListEventsRequest {
        this['limit'] = limit;
        return this;
    }
}