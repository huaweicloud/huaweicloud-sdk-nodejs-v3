

export class ShowDiagnosisStackRequest {
    public engine?: string;
    private 'stack_id'?: string;
    public constructor(engine?: string, stackId?: string) { 
        this['engine'] = engine;
        this['stack_id'] = stackId;
    }
    public withEngine(engine: string): ShowDiagnosisStackRequest {
        this['engine'] = engine;
        return this;
    }
    public withStackId(stackId: string): ShowDiagnosisStackRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
}