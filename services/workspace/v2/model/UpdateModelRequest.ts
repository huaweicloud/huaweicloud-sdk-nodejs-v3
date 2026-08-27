import { UpdateModelReq } from './UpdateModelReq';


export class UpdateModelRequest {
    private 'provider_id'?: string;
    private 'model_id'?: string;
    public body?: UpdateModelReq;
    public constructor(providerId?: string, modelId?: string) { 
        this['provider_id'] = providerId;
        this['model_id'] = modelId;
    }
    public withProviderId(providerId: string): UpdateModelRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withModelId(modelId: string): UpdateModelRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withBody(body: UpdateModelReq): UpdateModelRequest {
        this['body'] = body;
        return this;
    }
}