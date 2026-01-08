

export class Qos {
    public iops?: number;
    public throughput?: number;
    public constructor(iops?: number, throughput?: number) { 
        this['iops'] = iops;
        this['throughput'] = throughput;
    }
    public withIops(iops: number): Qos {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): Qos {
        this['throughput'] = throughput;
        return this;
    }
}