

export class SetRapidGrowthThresholdNewRequestBody {
    private 'engine_type'?: string;
    public threshold?: number;
    public constructor(engineType?: string, threshold?: number) { 
        this['engine_type'] = engineType;
        this['threshold'] = threshold;
    }
    public withEngineType(engineType: string): SetRapidGrowthThresholdNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withThreshold(threshold: number): SetRapidGrowthThresholdNewRequestBody {
        this['threshold'] = threshold;
        return this;
    }
}