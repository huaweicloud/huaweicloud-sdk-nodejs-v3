

export class ResourceFlavorSpecDataVolume {
    public volumeType?: string;
    public size?: string;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): ResourceFlavorSpecDataVolume {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSize(size: string): ResourceFlavorSpecDataVolume {
        this['size'] = size;
        return this;
    }
}