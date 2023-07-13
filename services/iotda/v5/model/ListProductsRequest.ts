

export class ListProductsRequest {
    private 'Instance-Id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    private 'app_id'?: string | undefined;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListProductsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListProductsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListProductsRequest {
        this['marker'] = marker;
        return this;
    }
    public withAppId(appId: string): ListProductsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withOffset(offset: number): ListProductsRequest {
        this['offset'] = offset;
        return this;
    }
}