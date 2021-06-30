

export class UserPassword {
    public username?: string;
    public password: string;
    public constructor(password?: any) { 
        this['password'] = password;
    }
    public withUsername(username: string): UserPassword {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): UserPassword {
        this['password'] = password;
        return this;
    }
}