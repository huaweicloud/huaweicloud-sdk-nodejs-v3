

export class ShowQuotaDetailsRequest {
    private 'site_id'?: string;
    private 'az_code'?: string;
    public constructor() { 
    }
    public withSiteId(siteId: string): ShowQuotaDetailsRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withAzCode(azCode: string): ShowQuotaDetailsRequest {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
}