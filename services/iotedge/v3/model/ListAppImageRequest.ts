

export class ListAppImageRequest {
    private 'app_id'?: string;
    public version?: string;
    public limit?: number;
    public offset?: number;
    public constructor(appId?: string, version?: string) { 
        this['app_id'] = appId;
        this['version'] = version;
    }
    public withAppId(appId: string): ListAppImageRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withVersion(version: string): ListAppImageRequest {
        this['version'] = version;
        return this;
    }
    public withLimit(limit: number): ListAppImageRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppImageRequest {
        this['offset'] = offset;
        return this;
    }
}