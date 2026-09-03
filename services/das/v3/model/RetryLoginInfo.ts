

export class RetryLoginInfo {
    public username?: string;
    public password?: string;
    private 'is_save_password'?: boolean;
    public constructor(password?: string, isSavePassword?: boolean) { 
        this['password'] = password;
        this['is_save_password'] = isSavePassword;
    }
    public withUsername(username: string): RetryLoginInfo {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RetryLoginInfo {
        this['password'] = password;
        return this;
    }
    public withIsSavePassword(isSavePassword: boolean): RetryLoginInfo {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
}