import { UpdateDcVncRequestBody } from './UpdateDcVncRequestBody';


export class UpdateDcVncRequest {
    private 'site_id'?: string;
    public body?: UpdateDcVncRequestBody;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): UpdateDcVncRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withBody(body: UpdateDcVncRequestBody): UpdateDcVncRequest {
        this['body'] = body;
        return this;
    }
}