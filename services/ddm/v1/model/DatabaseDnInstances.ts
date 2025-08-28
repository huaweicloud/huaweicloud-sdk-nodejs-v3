

export class DatabaseDnInstances {
    public id?: string;
    private 'user_name'?: string;
    private 'user_password'?: string;
    public constructor(id?: string, userName?: string, userPassword?: string) { 
        this['id'] = id;
        this['user_name'] = userName;
        this['user_password'] = userPassword;
    }
    public withId(id: string): DatabaseDnInstances {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): DatabaseDnInstances {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPassword(userPassword: string): DatabaseDnInstances {
        this['user_password'] = userPassword;
        return this;
    }
    public set userPassword(userPassword: string  | undefined) {
        this['user_password'] = userPassword;
    }
    public get userPassword(): string | undefined {
        return this['user_password'];
    }
}