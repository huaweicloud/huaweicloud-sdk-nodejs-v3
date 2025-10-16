

export class ListOtaModulesRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    private 'product_id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): ListOtaModulesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListOtaModulesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): ListOtaModulesRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withLimit(limit: number): ListOtaModulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOtaModulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListOtaModulesRequest {
        this['offset'] = offset;
        return this;
    }
}