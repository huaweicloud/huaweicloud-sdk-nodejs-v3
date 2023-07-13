

export class ListProductsRequest {
    public engine?: string;
    public constructor() { 
    }
    public withEngine(engine: string): ListProductsRequest {
        this['engine'] = engine;
        return this;
    }
}