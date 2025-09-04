

export class DeviceDataRecord {
    private 'disk_quota'?: number;
    public age?: number;
    public state?: string;
    public constructor(diskQuota?: number, age?: number, state?: string) { 
        this['disk_quota'] = diskQuota;
        this['age'] = age;
        this['state'] = state;
    }
    public withDiskQuota(diskQuota: number): DeviceDataRecord {
        this['disk_quota'] = diskQuota;
        return this;
    }
    public set diskQuota(diskQuota: number  | undefined) {
        this['disk_quota'] = diskQuota;
    }
    public get diskQuota(): number | undefined {
        return this['disk_quota'];
    }
    public withAge(age: number): DeviceDataRecord {
        this['age'] = age;
        return this;
    }
    public withState(state: string): DeviceDataRecord {
        this['state'] = state;
        return this;
    }
}