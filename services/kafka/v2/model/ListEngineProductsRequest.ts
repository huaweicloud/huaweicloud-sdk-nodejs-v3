

export class ListEngineProductsRequest {
    public engine: ListEngineProductsRequestEngineEnum;
    private 'product_id'?: string | undefined;
    public constructor(engine?: any) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListEngineProductsRequestEngineEnum): ListEngineProductsRequest {
        this['engine'] = engine;
        return this;
    }
    public withProductId(productId: string): ListEngineProductsRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
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
