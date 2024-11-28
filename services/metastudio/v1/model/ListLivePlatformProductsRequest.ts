

export class ListLivePlatformProductsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public offset?: number;
    public limit?: number;
    private 'platform_id'?: string;
    private 'live_id'?: string;
    public constructor(platformId?: string, liveId?: string) { 
        this['platform_id'] = platformId;
        this['live_id'] = liveId;
    }
    public withAuthorization(authorization: string): ListLivePlatformProductsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListLivePlatformProductsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListLivePlatformProductsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withOffset(offset: number): ListLivePlatformProductsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLivePlatformProductsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPlatformId(platformId: string): ListLivePlatformProductsRequest {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withLiveId(liveId: string): ListLivePlatformProductsRequest {
        this['live_id'] = liveId;
        return this;
    }
    public set liveId(liveId: string  | undefined) {
        this['live_id'] = liveId;
    }
    public get liveId(): string | undefined {
        return this['live_id'];
    }
}