import { ModelBatchDeleteReq } from './ModelBatchDeleteReq';


export class BatchDeleteModelRequest {
    private 'provider_id'?: string;
    public body?: ModelBatchDeleteReq;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): BatchDeleteModelRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: ModelBatchDeleteReq): BatchDeleteModelRequest {
        this['body'] = body;
        return this;
    }
}