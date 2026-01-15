

export class DesktopPoolVolumeInfo {
    public id?: string;
    public type?: string;
    public iops?: number;
    public throughput?: number;
    private 'kms_id'?: string;
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
    public withKmsId(kmsId: string): DesktopPoolVolumeInfo {
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