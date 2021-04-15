

export class AttachServerVolumeOption {
    public device?: string;
    public volumeId: string;
    public constructor(volumeId?: any) { 
        this['volumeId'] = volumeId;
    }
    public withDevice(device: string): AttachServerVolumeOption {
        this['device'] = device;
        return this;
    }
    public withVolumeId(volumeId: string): AttachServerVolumeOption {
        this['volumeId'] = volumeId;
        return this;
    }
}