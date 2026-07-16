import { BatchBindApiKeyRequest } from './BatchBindApiKeyRequest';


export class BatchBindInferApiKeysRequest {
    private 'service_id'?: string;
    public body?: BatchBindApiKeyRequest;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): BatchBindInferApiKeysRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: BatchBindApiKeyRequest): BatchBindInferApiKeysRequest {
        this['body'] = body;
        return this;
    }
}