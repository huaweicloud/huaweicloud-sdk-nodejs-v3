

export class DeviceDefaultValues {
    private 'device_id'?: string;
    private 'service_id'?: string;
    public properties?: object;
    public constructor(deviceId?: string, properties?: object) { 
        this['device_id'] = deviceId;
        this['properties'] = properties;
    }
    public withDeviceId(deviceId: string): DeviceDefaultValues {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withServiceId(serviceId: string): DeviceDefaultValues {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withProperties(properties: object): DeviceDefaultValues {
        this['properties'] = properties;
        return this;
    }
}