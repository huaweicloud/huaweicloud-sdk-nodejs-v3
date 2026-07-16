

export class RootVolume {
    public volumeType?: string;
    public size?: string;
    public constructor(volumeType?: string, size?: string) { 
        this['volumeType'] = volumeType;
        this['size'] = size;
    }
    public withVolumeType(volumeType: string): RootVolume {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSize(size: string): RootVolume {
        this['size'] = size;
        return this;
    }
}