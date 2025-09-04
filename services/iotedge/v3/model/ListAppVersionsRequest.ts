

export class ListAppVersionsRequest {
    private 'app_id'?: string;
    public version?: string;
    public limit?: number;
    public offset?: number;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): ListAppVersionsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withVersion(version: string): ListAppVersionsRequest {
        this['version'] = version;
        return this;
    }
    public withLimit(limit: number): ListAppVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppVersionsRequest {
        this['offset'] = offset;
        return this;
    }
}