

export class DevicePropertiesRequest {
    public services?: object;
    public constructor() { 
    }
    public withServices(services: object): DevicePropertiesRequest {
        this['services'] = services;
        return this;
    }
}