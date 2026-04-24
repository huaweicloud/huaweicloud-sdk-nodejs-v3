

export class CreateSubscribeUserInfo {
    private 'user_id'?: string;
    public constructor() { 
    }
    public withUserId(userId: string): CreateSubscribeUserInfo {
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