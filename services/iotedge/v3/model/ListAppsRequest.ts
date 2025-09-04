

export class ListAppsRequest {
    private 'app_type'?: string;
    private 'provider_type'?: string;
    private 'app_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withAppType(appType: string): ListAppsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withProviderType(providerType: string): ListAppsRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withAppId(appId: string): ListAppsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withLimit(limit: number): ListAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppsRequest {
        this['offset'] = offset;
        return this;
    }
}