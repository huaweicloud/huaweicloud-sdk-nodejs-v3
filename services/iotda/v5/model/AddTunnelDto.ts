

export class AddTunnelDto {
    private 'device_id'?: string;
    public constructor(deviceId?: string) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): AddTunnelDto {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
}