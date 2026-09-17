

export class ShowIamUserRequestBody {
    private 'user_ids'?: string;
    private 'connection_id'?: string;
    public constructor() { 
    }
    public withUserIds(userIds: string): ShowIamUserRequestBody {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: string  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): string | undefined {
        return this['user_ids'];
    }
    public withConnectionId(connectionId: string): ShowIamUserRequestBody {
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