import { UpdateSubnetIdsRequestBody } from './UpdateSubnetIdsRequestBody';


export class UpdateSubnetIdsRequest {
    private 'site_id'?: string;
    public body?: UpdateSubnetIdsRequestBody;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): UpdateSubnetIdsRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withBody(body: UpdateSubnetIdsRequestBody): UpdateSubnetIdsRequest {
        this['body'] = body;
        return this;
    }
}