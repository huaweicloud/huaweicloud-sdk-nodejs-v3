

export class DesktopPoolVolumeInfo {
    public id?: string;
    public type?: string;
    public iops?: number;
    public throughput?: number;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): DesktopPoolVolumeInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): DesktopPoolVolumeInfo {
        this['type'] = type;
        return this;
    }
    public withIops(iops: number): DesktopPoolVolumeInfo {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): DesktopPoolVolumeInfo {
        this['throughput'] = throughput;
        return this;
    }
}