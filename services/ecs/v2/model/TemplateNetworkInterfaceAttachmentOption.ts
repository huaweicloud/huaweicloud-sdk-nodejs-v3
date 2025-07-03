

export class TemplateNetworkInterfaceAttachmentOption {
    private 'device_index'?: number;
    public constructor() { 
    }
    public withDeviceIndex(deviceIndex: number): TemplateNetworkInterfaceAttachmentOption {
        this['device_index'] = deviceIndex;
        return this;
    }
    public set deviceIndex(deviceIndex: number  | undefined) {
        this['device_index'] = deviceIndex;
    }
    public get deviceIndex(): number | undefined {
        return this['device_index'];
    }
}