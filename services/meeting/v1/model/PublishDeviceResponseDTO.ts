

export class PublishDeviceResponseDTO {
    public deviceUserId?: string;
    public deviceName?: string;
    public constructor() { 
    }
    public withDeviceUserId(deviceUserId: string): PublishDeviceResponseDTO {
        this['deviceUserId'] = deviceUserId;
        return this;
    }
    public withDeviceName(deviceName: string): PublishDeviceResponseDTO {
        this['deviceName'] = deviceName;
        return this;
    }
}