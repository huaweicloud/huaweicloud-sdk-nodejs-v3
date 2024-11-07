import { UpdateSiteNetworkRequestBody } from './UpdateSiteNetworkRequestBody';


export class UpdateSiteNetworkRequest {
    private 'site_network_id'?: string;
    public body?: UpdateSiteNetworkRequestBody;
    public constructor(siteNetworkId?: string) { 
        this['site_network_id'] = siteNetworkId;
    }
    public withSiteNetworkId(siteNetworkId: string): UpdateSiteNetworkRequest {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: string  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): string | undefined {
        return this['site_network_id'];
    }
    public withBody(body: UpdateSiteNetworkRequestBody): UpdateSiteNetworkRequest {
        this['body'] = body;
        return this;
    }
}