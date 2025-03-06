

export class ListFlavorInfosRequest {
    private 'engine_name'?: string;
    public mode?: string;
    private 'product_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withEngineName(engineName: string): ListFlavorInfosRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withMode(mode: string): ListFlavorInfosRequest {
        this['mode'] = mode;
        return this;
    }
    public withProductType(productType: string): ListFlavorInfosRequest {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withOffset(offset: number): ListFlavorInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFlavorInfosRequest {
        this['limit'] = limit;
        return this;
    }
}