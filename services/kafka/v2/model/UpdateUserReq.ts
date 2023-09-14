

export class UpdateUserReq {
    private 'new_password'?: string;
    private 'user_name'?: string;
    private 'user_desc'?: string;
    public constructor() { 
    }
    public withNewPassword(newPassword: string): UpdateUserReq {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
    public withUserName(userName: string): UpdateUserReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserDesc(userDesc: string): UpdateUserReq {
        this['user_desc'] = userDesc;
        return this;
    }
    public set userDesc(userDesc: string  | undefined) {
        this['user_desc'] = userDesc;
    }
    public get userDesc(): string | undefined {
        return this['user_desc'];
    }
}