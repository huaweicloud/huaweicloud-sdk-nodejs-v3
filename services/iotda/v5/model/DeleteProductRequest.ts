

export class DeleteProductRequest {
    private 'Instance-Id'?: string;
    private 'product_id'?: string;
    private 'app_id'?: string;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withInstanceId(instanceId: string): DeleteProductRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProductId(productId: string): DeleteProductRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withAppId(appId: string): DeleteProductRequest {
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