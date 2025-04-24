

export class ListEventStreamingRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListEventStreamingRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventStreamingRequest {
        this['limit'] = limit;
        return this;
    }
}