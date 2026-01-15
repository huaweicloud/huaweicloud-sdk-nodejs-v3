

export class SubscribeUserInfo {
    private 'user_id'?: string;
    private 'user_name'?: string;
    public constructor(userId?: string, userName?: string) { 
        this['user_id'] = userId;
        this['user_name'] = userName;
    }
    public withUserId(userId: string): SubscribeUserInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): SubscribeUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}