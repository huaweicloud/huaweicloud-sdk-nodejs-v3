

export class DeleteSiteRequest {
    private 'site_id'?: string;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): DeleteSiteRequest {
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