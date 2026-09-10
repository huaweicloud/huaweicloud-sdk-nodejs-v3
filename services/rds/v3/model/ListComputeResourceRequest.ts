

export class ListComputeResourceRequest {
    public limit?: number;
    public offset?: number;
    public engine?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListComputeResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListComputeResourceRequest {
        this['offset'] = offset;
        return this;
    }
    public withEngine(engine: string): ListComputeResourceRequest {
        this['engine'] = engine;
        return this;
    }
}