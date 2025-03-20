

export class ServerVolumeAttachment {
    public device?: string;
    public id?: string;
    public serverId?: string;
    public volumeId?: string;
    public constructor() { 
    }
    public withDevice(device: string): ServerVolumeAttachment {
        this['device'] = device;
        return this;
    }
    public withId(id: string): ServerVolumeAttachment {
        this['id'] = id;
        return this;
    }
    public withServerId(serverId: string): ServerVolumeAttachment {
        this['serverId'] = serverId;
        return this;
    }
    public withVolumeId(volumeId: string): ServerVolumeAttachment {
        this['volumeId'] = volumeId;
        return this;
    }
}