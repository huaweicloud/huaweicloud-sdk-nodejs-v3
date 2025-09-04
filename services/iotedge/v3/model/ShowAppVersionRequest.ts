

export class ShowAppVersionRequest {
    private 'app_id'?: string;
    public version?: string;
    public constructor(appId?: string, version?: string) { 
        this['app_id'] = appId;
        this['version'] = version;
    }
    public withAppId(appId: string): ShowAppVersionRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withVersion(version: string): ShowAppVersionRequest {
        this['version'] = version;
        return this;
    }
}