

export class ListSubscribeAiAssistantUsersRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSubscribeAiAssistantUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSubscribeAiAssistantUsersRequest {
        this['offset'] = offset;
        return this;
    }
}