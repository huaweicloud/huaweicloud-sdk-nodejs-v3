

export class ModelBatchDeleteRespFailedDetails {
    private 'model_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withModelId(modelId: string): ModelBatchDeleteRespFailedDetails {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withReason(reason: string): ModelBatchDeleteRespFailedDetails {
        this['reason'] = reason;
        return this;
    }
}