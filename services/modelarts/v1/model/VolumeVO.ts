

export class VolumeVO {
    public volumeType?: string;
    public size?: string;
    public count?: number;
    public constructor(volumeType?: string, size?: string) { 
        this['volumeType'] = volumeType;
        this['size'] = size;
    }
    public withVolumeType(volumeType: string): VolumeVO {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSize(size: string): VolumeVO {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): VolumeVO {
        this['count'] = count;
        return this;
    }
}