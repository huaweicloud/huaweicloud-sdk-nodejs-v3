

export class ShowNetworkDeviceRequest {
    private 'network_device_id'?: string;
    public constructor(networkDeviceId?: string) { 
        this['network_device_id'] = networkDeviceId;
    }
    public withNetworkDeviceId(networkDeviceId: string): ShowNetworkDeviceRequest {
        this['network_device_id'] = networkDeviceId;
        return this;
    }
    public set networkDeviceId(networkDeviceId: string  | undefined) {
        this['network_device_id'] = networkDeviceId;
    }
    public get networkDeviceId(): string | undefined {
        return this['network_device_id'];
    }
}