

export class ReduceVolumeObject {
    public size?: number;
    public iops?: number;
    public throughput?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): ReduceVolumeObject {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): ReduceVolumeObject {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): ReduceVolumeObject {
        this['throughput'] = throughput;
        return this;
    }
}