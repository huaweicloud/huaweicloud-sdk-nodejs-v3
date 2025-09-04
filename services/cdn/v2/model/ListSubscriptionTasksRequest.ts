

export class ListSubscriptionTasksRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSubscriptionTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSubscriptionTasksRequest {
        this['offset'] = offset;
        return this;
    }
}