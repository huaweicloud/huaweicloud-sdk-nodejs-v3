

export class VolumeAttachments {
    public id?: string;
    public serverId?: string;
    public volumeId?: string;
    public device?: string;
    public constructor() { 
    }
    public withId(id: string): VolumeAttachments {
        this['id'] = id;
        return this;
    }
    public withServerId(serverId: string): VolumeAttachments {
        this['serverId'] = serverId;
        return this;
    }
    public withVolumeId(volumeId: string): VolumeAttachments {
        this['volumeId'] = volumeId;
        return this;
    }
    public withDevice(device: string): VolumeAttachments {
        this['device'] = device;
        return this;
    }
}