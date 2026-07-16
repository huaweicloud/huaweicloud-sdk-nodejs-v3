

export class VolumeExtendParams {
    public volumeGroup?: string;
    public constructor(volumeGroup?: string) { 
        this['volumeGroup'] = volumeGroup;
    }
    public withVolumeGroup(volumeGroup: string): VolumeExtendParams {
        this['volumeGroup'] = volumeGroup;
        return this;
    }
}