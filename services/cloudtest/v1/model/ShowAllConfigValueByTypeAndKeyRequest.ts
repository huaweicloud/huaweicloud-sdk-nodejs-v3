

export class ShowAllConfigValueByTypeAndKeyRequest {
    private 'service_id'?: string;
    public key?: string;
    public type?: string;
    public constructor(serviceId?: string, key?: string, type?: string) { 
        this['service_id'] = serviceId;
        this['key'] = key;
        this['type'] = type;
    }
    public withServiceId(serviceId: string): ShowAllConfigValueByTypeAndKeyRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withKey(key: string): ShowAllConfigValueByTypeAndKeyRequest {
        this['key'] = key;
        return this;
    }
    public withType(type: string): ShowAllConfigValueByTypeAndKeyRequest {
        this['type'] = type;
        return this;
    }
}