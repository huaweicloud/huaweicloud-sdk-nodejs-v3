

export class FunctionRequestDTO {
    private 'app_id'?: string;
    private 'product_id'?: string;
    public urn?: string;
    public description?: string;
    public constructor(productId?: string, urn?: string) { 
        this['product_id'] = productId;
        this['urn'] = urn;
    }
    public withAppId(appId: string): FunctionRequestDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): FunctionRequestDTO {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withUrn(urn: string): FunctionRequestDTO {
        this['urn'] = urn;
        return this;
    }
    public withDescription(description: string): FunctionRequestDTO {
        this['description'] = description;
        return this;
    }
}