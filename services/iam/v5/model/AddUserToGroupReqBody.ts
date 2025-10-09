

export class AddUserToGroupReqBody {
    private 'user_id'?: string;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): AddUserToGroupReqBody {
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