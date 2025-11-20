

export class ReduceVolumeObject {
    public size?: number;
    private 'is_delay'?: boolean;
    public iops?: number;
    public throughput?: number;
    public constructor(size?: number, isDelay?: boolean) { 
        this['size'] = size;
        this['is_delay'] = isDelay;
    }
    public withSize(size: number): ReduceVolumeObject {
        this['size'] = size;
        return this;
    }
    public withIsDelay(isDelay: boolean): ReduceVolumeObject {
        this['is_delay'] = isDelay;
        return this;
    }
    public set isDelay(isDelay: boolean  | undefined) {
        this['is_delay'] = isDelay;
    }
    public get isDelay(): boolean | undefined {
        return this['is_delay'];
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