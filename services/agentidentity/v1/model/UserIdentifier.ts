

export class UserIdentifier {
    private 'user_token'?: string;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withUserToken(userToken: string): UserIdentifier {
        this['user_token'] = userToken;
        return this;
    }
    public set userToken(userToken: string  | undefined) {
        this['user_token'] = userToken;
    }
    public get userToken(): string | undefined {
        return this['user_token'];
    }
    public withUserId(userId: string): UserIdentifier {
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