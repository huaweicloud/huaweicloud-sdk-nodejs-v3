

export class UpdateSharedInfoNewRequestBody {
    private 'user_id'?: string;
    private 'new_user_name'?: string;
    public constructor(userId?: string, newUserName?: string) { 
        this['user_id'] = userId;
        this['new_user_name'] = newUserName;
    }
    public withUserId(userId: string): UpdateSharedInfoNewRequestBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withNewUserName(newUserName: string): UpdateSharedInfoNewRequestBody {
        this['new_user_name'] = newUserName;
        return this;
    }
    public set newUserName(newUserName: string  | undefined) {
        this['new_user_name'] = newUserName;
    }
    public get newUserName(): string | undefined {
        return this['new_user_name'];
    }
}