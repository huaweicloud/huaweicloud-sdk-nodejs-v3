

export class ScreenRecordsConfigResultReqConfigs {
    private 'site_id'?: string;
    private 'traffic_limit'?: number;
    public constructor() { 
    }
    public withSiteId(siteId: string): ScreenRecordsConfigResultReqConfigs {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withTrafficLimit(trafficLimit: number): ScreenRecordsConfigResultReqConfigs {
        this['traffic_limit'] = trafficLimit;
        return this;
    }
    public set trafficLimit(trafficLimit: number  | undefined) {
        this['traffic_limit'] = trafficLimit;
    }
    public get trafficLimit(): number | undefined {
        return this['traffic_limit'];
    }
}