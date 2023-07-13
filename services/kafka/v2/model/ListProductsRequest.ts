

export class ListProductsRequest {
    public engine: string;
    public constructor(engine?: any) { 
        this['engine'] = engine;
    }
    public withEngine(engine: string): ListProductsRequest {
        this['engine'] = engine;
        return this;
    }
}