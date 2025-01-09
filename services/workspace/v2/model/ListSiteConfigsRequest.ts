

export class ListSiteConfigsRequest {
    private 'availability_zone_id'?: string;
    private 'site_type'?: string;
    public constructor() { 
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListSiteConfigsRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withSiteType(siteType: string): ListSiteConfigsRequest {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): string | undefined {
        return this['site_type'];
    }
}