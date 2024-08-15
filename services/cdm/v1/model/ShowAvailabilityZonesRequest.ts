

export class ShowAvailabilityZonesRequest {
    private 'region_id'?: string;
    public constructor(regionId?: string) { 
        this['region_id'] = regionId;
    }
    public withRegionId(regionId: string): ShowAvailabilityZonesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}