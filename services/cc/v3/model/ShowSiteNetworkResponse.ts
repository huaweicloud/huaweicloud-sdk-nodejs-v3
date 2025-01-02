import { RequestId } from './RequestId';
import { SiteNetworkEntry } from './SiteNetworkEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSiteNetworkResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'site_network'?: SiteNetworkEntry;
    public constructor(requestId?: string, siteNetwork?: SiteNetworkEntry) { 
        super();
        this['request_id'] = requestId;
        this['site_network'] = siteNetwork;
    }
    public withRequestId(requestId: string): ShowSiteNetworkResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSiteNetwork(siteNetwork: SiteNetworkEntry): ShowSiteNetworkResponse {
        this['site_network'] = siteNetwork;
        return this;
    }
    public set siteNetwork(siteNetwork: SiteNetworkEntry  | undefined) {
        this['site_network'] = siteNetwork;
    }
    public get siteNetwork(): SiteNetworkEntry | undefined {
        return this['site_network'];
    }
}