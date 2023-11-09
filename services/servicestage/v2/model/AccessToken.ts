

export class AccessToken {
    public name?: string;
    public token?: string;
    public host?: string;
    public constructor(name?: string, token?: string) { 
        this['name'] = name;
        this['token'] = token;
    }
    public withName(name: string): AccessToken {
        this['name'] = name;
        return this;
    }
    public withToken(token: string): AccessToken {
        this['token'] = token;
        return this;
    }
    public withHost(host: string): AccessToken {
        this['host'] = host;
        return this;
    }
}