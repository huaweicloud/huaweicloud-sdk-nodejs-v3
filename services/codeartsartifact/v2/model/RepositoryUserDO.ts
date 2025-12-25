

export class RepositoryUserDO {
    public username?: string;
    public password?: string;
    public constructor() { 
    }
    public withUsername(username: string): RepositoryUserDO {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RepositoryUserDO {
        this['password'] = password;
        return this;
    }
}