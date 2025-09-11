

export class ChangePasswordRequest {
    private 'new_password'?: string;
    private 'user_name'?: string;
    public constructor(newPassword?: string, userName?: string) { 
        this['new_password'] = newPassword;
        this['user_name'] = userName;
    }
    public withNewPassword(newPassword: string): ChangePasswordRequest {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
    public withUserName(userName: string): ChangePasswordRequest {
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