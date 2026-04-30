

export class AuthObject {
    private 'app_id'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): AuthObject {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}