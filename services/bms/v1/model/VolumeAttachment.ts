

export class VolumeAttachment {
    public volumeId?: string;
    public device?: string;
    public constructor(volumeId?: string) { 
        this['volumeId'] = volumeId;
    }
    public withVolumeId(volumeId: string): VolumeAttachment {
        this['volumeId'] = volumeId;
        return this;
    }
    public withDevice(device: string): VolumeAttachment {
        this['device'] = device;
        return this;
    }
}