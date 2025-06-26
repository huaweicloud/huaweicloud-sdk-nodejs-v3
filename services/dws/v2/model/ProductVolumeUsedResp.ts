

export class ProductVolumeUsedResp {
    private 'volume_type'?: string;
    private 'volume_num'?: number;
    public capacity?: number;
    private 'volume_size'?: number;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): ProductVolumeUsedResp {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeNum(volumeNum: number): ProductVolumeUsedResp {
        this['volume_num'] = volumeNum;
        return this;
    }
    public set volumeNum(volumeNum: number  | undefined) {
        this['volume_num'] = volumeNum;
    }
    public get volumeNum(): number | undefined {
        return this['volume_num'];
    }
    public withCapacity(capacity: number): ProductVolumeUsedResp {
        this['capacity'] = capacity;
        return this;
    }
    public withVolumeSize(volumeSize: number): ProductVolumeUsedResp {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
}