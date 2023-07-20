

export class GaussDBforOpenGaussUserForCreation {
    public name?: string;
    public password?: string;
    private 'is_login_only'?: boolean;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): GaussDBforOpenGaussUserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): GaussDBforOpenGaussUserForCreation {
        this['password'] = password;
        return this;
    }
    public withIsLoginOnly(isLoginOnly: boolean): GaussDBforOpenGaussUserForCreation {
        this['is_login_only'] = isLoginOnly;
        return this;
    }
    public set isLoginOnly(isLoginOnly: boolean  | undefined) {
        this['is_login_only'] = isLoginOnly;
    }
    public get isLoginOnly(): boolean | undefined {
        return this['is_login_only'];
    }
}