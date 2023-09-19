

export class CreateInterRegionBandwidth {
    private 'cloud_connection_id'?: string;
    private 'bandwidth_package_id'?: string;
    public bandwidth?: number;
    private 'inter_region_ids'?: Array<string>;
    public constructor(cloudConnectionId?: string, bandwidthPackageId?: string, bandwidth?: number, interRegionIds?: Array<string>) { 
        this['cloud_connection_id'] = cloudConnectionId;
        this['bandwidth_package_id'] = bandwidthPackageId;
        this['bandwidth'] = bandwidth;
        this['inter_region_ids'] = interRegionIds;
    }
    public withCloudConnectionId(cloudConnectionId: string): CreateInterRegionBandwidth {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withBandwidthPackageId(bandwidthPackageId: string): CreateInterRegionBandwidth {
        this['bandwidth_package_id'] = bandwidthPackageId;
        return this;
    }
    public set bandwidthPackageId(bandwidthPackageId: string  | undefined) {
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public get bandwidthPackageId(): string | undefined {
        return this['bandwidth_package_id'];
    }
    public withBandwidth(bandwidth: number): CreateInterRegionBandwidth {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withInterRegionIds(interRegionIds: Array<string>): CreateInterRegionBandwidth {
        this['inter_region_ids'] = interRegionIds;
        return this;
    }
    public set interRegionIds(interRegionIds: Array<string>  | undefined) {
        this['inter_region_ids'] = interRegionIds;
    }
    public get interRegionIds(): Array<string> | undefined {
        return this['inter_region_ids'];
    }
}