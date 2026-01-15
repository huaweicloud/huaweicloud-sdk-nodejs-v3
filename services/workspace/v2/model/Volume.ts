

export class Volume {
    public type?: string;
    public size?: number;
    public iops?: number;
    public throughput?: number;
    private 'kms_id'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): Volume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Volume {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): Volume {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): Volume {
        this['throughput'] = throughput;
        return this;
    }
    public withKmsId(kmsId: string): Volume {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
}