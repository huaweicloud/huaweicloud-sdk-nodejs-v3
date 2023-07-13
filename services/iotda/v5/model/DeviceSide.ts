

export class DeviceSide {
    private 'device_ids'?: Array<string> | undefined;
    public constructor() { 
    }
    public withDeviceIds(deviceIds: Array<string>): DeviceSide {
        this['device_ids'] = deviceIds;
        return this;
    }
    public set deviceIds(deviceIds: Array<string> | undefined) {
        this['device_ids'] = deviceIds;
    }
    public get deviceIds() {
        return this['device_ids'];
    }
}