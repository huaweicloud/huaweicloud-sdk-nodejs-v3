

export class TemplateDisk {
    public id?: number;
    public index?: number;
    public name?: string;
    public disktype?: string;
    public size?: number;
    private 'device_use'?: string;
    public constructor(index?: number, name?: string, disktype?: string, size?: number) { 
        this['index'] = index;
        this['name'] = name;
        this['disktype'] = disktype;
        this['size'] = size;
    }
    public withId(id: number): TemplateDisk {
        this['id'] = id;
        return this;
    }
    public withIndex(index: number): TemplateDisk {
        this['index'] = index;
        return this;
    }
    public withName(name: string): TemplateDisk {
        this['name'] = name;
        return this;
    }
    public withDisktype(disktype: string): TemplateDisk {
        this['disktype'] = disktype;
        return this;
    }
    public withSize(size: number): TemplateDisk {
        this['size'] = size;
        return this;
    }
    public withDeviceUse(deviceUse: string): TemplateDisk {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): string | undefined {
        return this['device_use'];
    }
}