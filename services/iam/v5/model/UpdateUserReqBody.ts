

export class UpdateUserReqBody {
    private 'new_user_name'?: string;
    private 'new_description'?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withNewUserName(newUserName: string): UpdateUserReqBody {
        this['new_user_name'] = newUserName;
        return this;
    }
    public set newUserName(newUserName: string  | undefined) {
        this['new_user_name'] = newUserName;
    }
    public get newUserName(): string | undefined {
        return this['new_user_name'];
    }
    public withNewDescription(newDescription: string): UpdateUserReqBody {
        this['new_description'] = newDescription;
        return this;
    }
    public set newDescription(newDescription: string  | undefined) {
        this['new_description'] = newDescription;
    }
    public get newDescription(): string | undefined {
        return this['new_description'];
    }
    public withEnabled(enabled: boolean): UpdateUserReqBody {
        this['enabled'] = enabled;
        return this;
    }
}