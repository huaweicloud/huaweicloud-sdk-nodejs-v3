

export class ListScreenRecordsTrafficLimitConfigRequest {
    private 'site_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withSiteId(siteId: string): ListScreenRecordsTrafficLimitConfigRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withLimit(limit: number): ListScreenRecordsTrafficLimitConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListScreenRecordsTrafficLimitConfigRequest {
        this['offset'] = offset;
        return this;
    }
}