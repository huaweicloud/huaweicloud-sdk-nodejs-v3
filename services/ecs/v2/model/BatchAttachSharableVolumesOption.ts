

export class BatchAttachSharableVolumesOption {
    private 'server_id': string | undefined;
    public device?: string;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): BatchAttachSharableVolumesOption {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withDevice(device: string): BatchAttachSharableVolumesOption {
        this['device'] = device;
        return this;
    }
}