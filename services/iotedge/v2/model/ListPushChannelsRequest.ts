

export class ListPushChannelsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListPushChannelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPushChannelsRequest {
        this['limit'] = limit;
        return this;
    }
}