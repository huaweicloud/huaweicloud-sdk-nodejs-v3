

export class RegionManagedList {
    public region?: string;
    private 'region_status'?: string;
    public constructor() { 
    }
    public withRegion(region: string): RegionManagedList {
        this['region'] = region;
        return this;
    }
    public withRegionStatus(regionStatus: string): RegionManagedList {
        this['region_status'] = regionStatus;
        return this;
    }
    public set regionStatus(regionStatus: string  | undefined) {
        this['region_status'] = regionStatus;
    }
    public get regionStatus(): string | undefined {
        return this['region_status'];
    }
}