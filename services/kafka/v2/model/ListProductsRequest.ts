

export class ListProductsRequest {
    public engine?: ListProductsRequestEngineEnum | string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListProductsRequestEngineEnum | string): ListProductsRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProductsRequestEngineEnum {
    KAFKA = 'kafka'
}
