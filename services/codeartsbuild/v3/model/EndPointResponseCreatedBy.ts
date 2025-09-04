

export class EndPointResponseCreatedBy {
    public username?: string;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withUsername(username: string): EndPointResponseCreatedBy {
        this['username'] = username;
        return this;
    }
    public withUserId(userId: string): EndPointResponseCreatedBy {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}