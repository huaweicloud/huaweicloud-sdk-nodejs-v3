

export class UserPassword {
    public password: string;
    public username?: string;
    public constructor(password?: any) { 
        this['password'] = password;
    }
    public withPassword(password: string): UserPassword {
        this['password'] = password;
        return this;
    }
    public withUsername(username: string): UserPassword {
        this['username'] = username;
        return this;
    }
}