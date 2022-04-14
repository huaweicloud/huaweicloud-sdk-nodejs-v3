

export class ListPropertiesRequest {
    private 'device_id': string | undefined;
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    private 'service_id': string | undefined;
    public constructor(deviceId?: any, serviceId?: any) { 
        this['device_id'] = deviceId;
        this['service_id'] = serviceId;
    }
    public withDeviceId(deviceId: string): ListPropertiesRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withSpAuthToken(spAuthToken: string): ListPropertiesRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withInstanceId(instanceId: string): ListPropertiesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withServiceId(serviceId: string): ListPropertiesRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
}