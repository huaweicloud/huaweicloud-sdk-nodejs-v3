

export class ShowInstanceDistributionRequest {
    private 'engine_type'?: string;
    public constructor() { 
    }
    public withEngineType(engineType: string): ShowInstanceDistributionRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}