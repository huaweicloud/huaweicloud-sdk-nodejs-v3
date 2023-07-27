

export class AppResetCreate {
    private 'app_secret'?: string;
    public constructor() { 
    }
    public withAppSecret(appSecret: string): AppResetCreate {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
}