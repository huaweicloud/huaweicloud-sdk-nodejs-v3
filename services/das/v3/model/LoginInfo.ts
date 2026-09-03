

export class LoginInfo {
    public username?: string;
    public constructor() { 
    }
    public withUsername(username: string): LoginInfo {
        this['username'] = username;
        return this;
    }
}