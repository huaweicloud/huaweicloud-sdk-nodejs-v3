import { UpdateAccessModeReq } from './UpdateAccessModeReq';


export class UpdateAccessModeRequest {
    private 'site_id'?: string;
    public body?: UpdateAccessModeReq;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): UpdateAccessModeRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withBody(body: UpdateAccessModeReq): UpdateAccessModeRequest {
        this['body'] = body;
        return this;
    }
}