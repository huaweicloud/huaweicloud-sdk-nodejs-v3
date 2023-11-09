

export class HookCreate {
    public secret?: string;
    public url?: string;
    public constructor(secret?: string, url?: string) { 
        this['secret'] = secret;
        this['url'] = url;
    }
    public withSecret(secret: string): HookCreate {
        this['secret'] = secret;
        return this;
    }
    public withUrl(url: string): HookCreate {
        this['url'] = url;
        return this;
    }
}