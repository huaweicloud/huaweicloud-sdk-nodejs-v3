

export class DatabaseUser {
    public name?: string;
    public login?: boolean;
    private 'user_type'?: string;
    public constructor() { 
    }
    public withName(name: string): DatabaseUser {
        this['name'] = name;
        return this;
    }
    public withLogin(login: boolean): DatabaseUser {
        this['login'] = login;
        return this;
    }
    public withUserType(userType: string): DatabaseUser {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}