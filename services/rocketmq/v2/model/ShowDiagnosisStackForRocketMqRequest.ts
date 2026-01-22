

export class ShowDiagnosisStackForRocketMqRequest {
    private 'stack_id'?: string;
    public constructor(stackId?: string) { 
        this['stack_id'] = stackId;
    }
    public withStackId(stackId: string): ShowDiagnosisStackForRocketMqRequest {
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