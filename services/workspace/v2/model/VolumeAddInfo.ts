

export class VolumeAddInfo {
    public id?: string;
    public type?: string;
    public size?: number;
    public iops?: number;
    public throughput?: number;
    private 'kms_id'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withId(id: string): VolumeAddInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): VolumeAddInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeAddInfo {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): VolumeAddInfo {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): VolumeAddInfo {
        this['throughput'] = throughput;
        return this;
    }
    public withKmsId(kmsId: string): VolumeAddInfo {
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