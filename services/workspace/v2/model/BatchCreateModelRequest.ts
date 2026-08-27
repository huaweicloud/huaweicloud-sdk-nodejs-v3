import { ModelBatchCreateReq } from './ModelBatchCreateReq';


export class BatchCreateModelRequest {
    private 'provider_id'?: string;
    public body?: ModelBatchCreateReq;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): BatchCreateModelRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: ModelBatchCreateReq): BatchCreateModelRequest {
        this['body'] = body;
        return this;
    }
}