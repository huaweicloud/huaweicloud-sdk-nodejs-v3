

export class DiskInfoResponse {
    public percentage?: string;
    public id?: string;
    public name?: string;
    private 'disk_capacity'?: string;
    private 'disk_used'?: string;
    public constructor() { 
    }
    public withPercentage(percentage: string): DiskInfoResponse {
        this['percentage'] = percentage;
        return this;
    }
    public withId(id: string): DiskInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DiskInfoResponse {
        this['name'] = name;
        return this;
    }
    public withDiskCapacity(diskCapacity: string): DiskInfoResponse {
        this['disk_capacity'] = diskCapacity;
        return this;
    }
    public set diskCapacity(diskCapacity: string  | undefined) {
        this['disk_capacity'] = diskCapacity;
    }
    public get diskCapacity(): string | undefined {
        return this['disk_capacity'];
    }
    public withDiskUsed(diskUsed: string): DiskInfoResponse {
        this['disk_used'] = diskUsed;
        return this;
    }
    public set diskUsed(diskUsed: string  | undefined) {
        this['disk_used'] = diskUsed;
    }
    public get diskUsed(): string | undefined {
        return this['disk_used'];
    }
}