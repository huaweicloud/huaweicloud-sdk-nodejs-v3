

export class ListRiskItemsApiRequest {
    private 'engine_type'?: string;
    public constructor(engineType?: string) { 
        this['engine_type'] = engineType;
    }
    public withEngineType(engineType: string): ListRiskItemsApiRequest {
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