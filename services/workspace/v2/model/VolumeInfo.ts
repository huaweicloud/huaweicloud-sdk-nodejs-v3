

export class VolumeInfo {
    public id?: string;
    public type?: string;
    public size?: number;
    public iops?: number;
    public throughput?: number;
    private 'resource_spec_code'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withId(id: string): VolumeInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): VolumeInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeInfo {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): VolumeInfo {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): VolumeInfo {
        this['throughput'] = throughput;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}