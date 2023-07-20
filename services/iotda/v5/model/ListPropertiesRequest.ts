

export class ListPropertiesRequest {
    private 'device_id'?: string;
    private 'Instance-Id'?: string;
    private 'service_id'?: string;
    public constructor(deviceId?: string, serviceId?: string) { 
        this['device_id'] = deviceId;
        this['service_id'] = serviceId;
    }
    public withDeviceId(deviceId: string): ListPropertiesRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): ListPropertiesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withServiceId(serviceId: string): ListPropertiesRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
}