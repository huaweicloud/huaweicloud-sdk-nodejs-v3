

export class ListEngineProductsRequest {
    public engine?: string;
    public type?: string;
    private 'product_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(engine?: string, type?: string, productId?: string) { 
        this['engine'] = engine;
        this['type'] = type;
        this['product_id'] = productId;
    }
    public withEngine(engine: string): ListEngineProductsRequest {
        this['engine'] = engine;
        return this;
    }
    public withType(type: string): ListEngineProductsRequest {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ListEngineProductsRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withLimit(limit: number): ListEngineProductsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEngineProductsRequest {
        this['offset'] = offset;
        return this;
    }
}