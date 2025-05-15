

export class RemoteRegionId {
    private 'remote_region_id'?: string;
    public constructor(remoteRegionId?: string) { 
        this['remote_region_id'] = remoteRegionId;
    }
    public withRemoteRegionId(remoteRegionId: string): RemoteRegionId {
        this['remote_region_id'] = remoteRegionId;
        return this;
    }
    public set remoteRegionId(remoteRegionId: string  | undefined) {
        this['remote_region_id'] = remoteRegionId;
    }
    public get remoteRegionId(): string | undefined {
        return this['remote_region_id'];
    }
}