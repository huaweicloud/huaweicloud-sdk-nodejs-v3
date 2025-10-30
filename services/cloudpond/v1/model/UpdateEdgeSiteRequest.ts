import { UpdateEdgeSiteRequestBody } from './UpdateEdgeSiteRequestBody';


export class UpdateEdgeSiteRequest {
    private 'site_id'?: string;
    public body?: UpdateEdgeSiteRequestBody;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): UpdateEdgeSiteRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withBody(body: UpdateEdgeSiteRequestBody): UpdateEdgeSiteRequest {
        this['body'] = body;
        return this;
    }
}