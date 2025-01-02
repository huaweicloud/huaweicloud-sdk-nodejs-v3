

export class ListBandwidthPackageSitesRequest {
    private 'site_code'?: string;
    private 'region_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withSiteCode(siteCode: string): ListBandwidthPackageSitesRequest {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withRegionId(regionId: string): ListBandwidthPackageSitesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withName(name: string): ListBandwidthPackageSitesRequest {
        this['name'] = name;
        return this;
    }
}