

export class EndpointCreatorInfo {
    private 'user_id'?: string;
    public username?: string;
    public constructor() { 
    }
    public withUserId(userId: string): EndpointCreatorInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUsername(username: string): EndpointCreatorInfo {
        this['username'] = username;
        return this;
    }
}