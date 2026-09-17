

export class DeviceIoTDBNodeChannelPushInfoDetail {
    private 'storage_group'?: string;
    public constructor() { 
    }
    public withStorageGroup(storageGroup: string): DeviceIoTDBNodeChannelPushInfoDetail {
        this['storage_group'] = storageGroup;
        return this;
    }
    public set storageGroup(storageGroup: string  | undefined) {
        this['storage_group'] = storageGroup;
    }
    public get storageGroup(): string | undefined {
        return this['storage_group'];
    }
}