

export class ListEngineProductsRequest {
    public engine?: ListEngineProductsRequestEngineEnum | string;
    private 'product_id'?: string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListEngineProductsRequestEngineEnum | string): ListEngineProductsRequest {
        this['engine'] = engine;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListEngineProductsRequestEngineEnum {
    KAFKA = 'kafka'
}
