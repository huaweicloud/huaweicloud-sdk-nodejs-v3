

export class ListNatMappingConfigsRequest {
    private 'site_id'?: string;
    public constructor() { 
    }
    public withSiteId(siteId: string): ListNatMappingConfigsRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
}