

export class ListProductsRequest {
    private 'Instance-Id'?: string;
    public limit?: number;
    public marker?: string;
    private 'app_id'?: string;
    private 'product_name'?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListProductsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
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
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductName(productName: string): ListProductsRequest {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withOffset(offset: number): ListProductsRequest {
        this['offset'] = offset;
        return this;
    }
}