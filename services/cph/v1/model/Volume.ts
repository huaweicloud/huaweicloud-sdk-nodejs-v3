

export class Volume {
    private 'volume_name'?: string;
    private 'volume_id'?: string;
    private 'volume_size'?: number;
    private 'volume_type'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withVolumeName(volumeName: string): Volume {
        this['volume_name'] = volumeName;
        return this;
    }
    public set volumeName(volumeName: string  | undefined) {
        this['volume_name'] = volumeName;
    }
    public get volumeName(): string | undefined {
        return this['volume_name'];
    }
    public withVolumeId(volumeId: string): Volume {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withVolumeSize(volumeSize: number): Volume {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withVolumeType(volumeType: string): Volume {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withCreateTime(createTime: string): Volume {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Volume {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}