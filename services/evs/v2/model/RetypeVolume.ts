

export class RetypeVolume {
    private 'new_type'?: string;
    public iops?: number;
    public throughput?: number;
    public constructor(newType?: string) { 
        this['new_type'] = newType;
    }
    public withNewType(newType: string): RetypeVolume {
        this['new_type'] = newType;
        return this;
    }
    public set newType(newType: string  | undefined) {
        this['new_type'] = newType;
    }
    public get newType(): string | undefined {
        return this['new_type'];
    }
    public withIops(iops: number): RetypeVolume {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): RetypeVolume {
        this['throughput'] = throughput;
        return this;
    }
}