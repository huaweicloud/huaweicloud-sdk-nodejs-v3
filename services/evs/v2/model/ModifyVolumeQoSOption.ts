

export class ModifyVolumeQoSOption {
    public iops?: number;
    public throughput?: number;
    public constructor(iops?: number) { 
        this['iops'] = iops;
    }
    public withIops(iops: number): ModifyVolumeQoSOption {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): ModifyVolumeQoSOption {
        this['throughput'] = throughput;
        return this;
    }
}