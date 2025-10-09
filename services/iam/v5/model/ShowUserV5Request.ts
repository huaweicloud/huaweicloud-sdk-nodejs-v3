

export class ShowUserV5Request {
    private 'user_id'?: string;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): ShowUserV5Request {
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