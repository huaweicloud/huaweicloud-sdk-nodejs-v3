

export class ListSubUsersRequest {
    public keywords?: string;
    private 'connection_id'?: string;
    public constructor() { 
    }
    public withKeywords(keywords: string): ListSubUsersRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withConnectionId(connectionId: string): ListSubUsersRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}