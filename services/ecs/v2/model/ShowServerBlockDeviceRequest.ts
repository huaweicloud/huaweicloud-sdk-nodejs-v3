

export class ShowServerBlockDeviceRequest {
    private 'server_id': string | undefined;
    private 'volume_id': string | undefined;
    public constructor(serverId?: any, volumeId?: any) { 
        this['server_id'] = serverId;
        this['volume_id'] = volumeId;
    }
    public withServerId(serverId: string): ShowServerBlockDeviceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): ShowServerBlockDeviceRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}