

export class FlavorVolumeNodeInfo {
    private 'volume_type'?: string;
    private 'volume_num'?: number;
    public capacity?: number;
    private 'volume_size'?: number;
    public constructor(volumeType?: string, volumeNum?: number, capacity?: number, volumeSize?: number) { 
        this['volume_type'] = volumeType;
        this['volume_num'] = volumeNum;
        this['capacity'] = capacity;
        this['volume_size'] = volumeSize;
    }
    public withVolumeType(volumeType: string): FlavorVolumeNodeInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeNum(volumeNum: number): FlavorVolumeNodeInfo {
        this['volume_num'] = volumeNum;
        return this;
    }
    public set volumeNum(volumeNum: number  | undefined) {
        this['volume_num'] = volumeNum;
    }
    public get volumeNum(): number | undefined {
        return this['volume_num'];
    }
    public withCapacity(capacity: number): FlavorVolumeNodeInfo {
        this['capacity'] = capacity;
        return this;
    }
    public withVolumeSize(volumeSize: number): FlavorVolumeNodeInfo {
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