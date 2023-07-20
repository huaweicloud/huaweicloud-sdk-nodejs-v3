

export class ListFlavorsRequest {
    public region?: string;
    private 'engine_name'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ListFlavorsRequest {
        this['region'] = region;
        return this;
    }
    public withEngineName(engineName: string): ListFlavorsRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
}