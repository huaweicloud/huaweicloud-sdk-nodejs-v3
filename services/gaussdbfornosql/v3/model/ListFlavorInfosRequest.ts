

export class ListFlavorInfosRequest {
    private 'engine_name'?: string;
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
    public withOffset(offset: number): ListFlavorInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFlavorInfosRequest {
        this['limit'] = limit;
        return this;
    }
}