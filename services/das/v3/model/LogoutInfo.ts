

export class LogoutInfo {
    public username?: string;
    public constructor() { 
    }
    public withUsername(username: string): LogoutInfo {
        this['username'] = username;
        return this;
    }
}