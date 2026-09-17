

export class DeviceIoTDBPushInfoDetail {
    private 'storage_group'?: string;
    public format?: string;
    public constructor() { 
    }
    public withStorageGroup(storageGroup: string): DeviceIoTDBPushInfoDetail {
        this['storage_group'] = storageGroup;
        return this;
    }
    public set storageGroup(storageGroup: string  | undefined) {
        this['storage_group'] = storageGroup;
    }
    public get storageGroup(): string | undefined {
        return this['storage_group'];
    }
    public withFormat(format: string): DeviceIoTDBPushInfoDetail {
        this['format'] = format;
        return this;
    }
}