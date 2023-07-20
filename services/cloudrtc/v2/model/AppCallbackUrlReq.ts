

export class AppCallbackUrlReq {
    public url?: string;
    private 'auth_key'?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AppCallbackUrlReq {
        this['url'] = url;
        return this;
    }
    public withAuthKey(authKey: string): AppCallbackUrlReq {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string  | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey(): string | undefined {
        return this['auth_key'];
    }
}