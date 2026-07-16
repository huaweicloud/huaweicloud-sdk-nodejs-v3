import { BatchUnBindApiKeyRequest } from './BatchUnBindApiKeyRequest';


export class BatchUnbindInferApiKeysRequest {
    private 'service_id'?: string;
    public body?: BatchUnBindApiKeyRequest;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): BatchUnbindInferApiKeysRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: BatchUnBindApiKeyRequest): BatchUnbindInferApiKeysRequest {
        this['body'] = body;
        return this;
    }
}