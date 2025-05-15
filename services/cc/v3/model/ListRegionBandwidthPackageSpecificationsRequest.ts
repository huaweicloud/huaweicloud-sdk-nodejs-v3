

export class ListRegionBandwidthPackageSpecificationsRequest {
    private 'local_region_id'?: string;
    private 'remote_region_id'?: string;
    public constructor() { 
    }
    public withLocalRegionId(localRegionId: string): ListRegionBandwidthPackageSpecificationsRequest {
        this['local_region_id'] = localRegionId;
        return this;
    }
    public set localRegionId(localRegionId: string  | undefined) {
        this['local_region_id'] = localRegionId;
    }
    public get localRegionId(): string | undefined {
        return this['local_region_id'];
    }
    public withRemoteRegionId(remoteRegionId: string): ListRegionBandwidthPackageSpecificationsRequest {
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