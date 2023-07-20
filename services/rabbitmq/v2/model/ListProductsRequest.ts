

export class ListProductsRequest {
    public engine?: ListProductsRequestEngineEnum | string;
    public constructor() { 
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
    RABBITMQ = 'rabbitmq'
}
