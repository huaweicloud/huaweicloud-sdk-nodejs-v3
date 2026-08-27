

export class ShowModelRequest {
    private 'provider_id'?: string;
    private 'model_id'?: string;
    public constructor(providerId?: string, modelId?: string) { 
        this['provider_id'] = providerId;
        this['model_id'] = modelId;
    }
    public withProviderId(providerId: string): ShowModelRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withModelId(modelId: string): ShowModelRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}