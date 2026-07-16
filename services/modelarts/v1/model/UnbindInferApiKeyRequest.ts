

export class UnbindInferApiKeyRequest {
    private 'service_id'?: string;
    private 'key_id'?: string;
    public constructor(serviceId?: string, keyId?: string) { 
        this['service_id'] = serviceId;
        this['key_id'] = keyId;
    }
    public withServiceId(serviceId: string): UnbindInferApiKeyRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withKeyId(keyId: string): UnbindInferApiKeyRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
}