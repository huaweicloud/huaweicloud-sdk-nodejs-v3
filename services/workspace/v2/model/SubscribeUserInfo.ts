

export class SubscribeUserInfo {
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_phone'?: string;
    private 'ai_func'?: boolean;
    public constructor() { 
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
    public withUserPhone(userPhone: string): SubscribeUserInfo {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withAiFunc(aiFunc: boolean): SubscribeUserInfo {
        this['ai_func'] = aiFunc;
        return this;
    }
    public set aiFunc(aiFunc: boolean  | undefined) {
        this['ai_func'] = aiFunc;
    }
    public get aiFunc(): boolean | undefined {
        return this['ai_func'];
    }
}