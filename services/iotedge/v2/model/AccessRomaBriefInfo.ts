

export class AccessRomaBriefInfo {
    private 'app_key'?: string;
    public constructor() { 
    }
    public withAppKey(appKey: string): AccessRomaBriefInfo {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
}