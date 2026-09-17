

export class DeviceIoTDBPushInfo {
    private 'storage_group'?: string;
    public format?: string;
    public constructor(storageGroup?: string, format?: string) { 
        this['storage_group'] = storageGroup;
        this['format'] = format;
    }
    public withStorageGroup(storageGroup: string): DeviceIoTDBPushInfo {
        this['storage_group'] = storageGroup;
        return this;
    }
    public set storageGroup(storageGroup: string  | undefined) {
        this['storage_group'] = storageGroup;
    }
    public get storageGroup(): string | undefined {
        return this['storage_group'];
    }
    public withFormat(format: string): DeviceIoTDBPushInfo {
        this['format'] = format;
        return this;
    }
}