import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';
import { SiteNetworkEntry } from './SiteNetworkEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSiteNetworksResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'site_networks'?: Array<SiteNetworkEntry>;
    public constructor(requestId?: string, siteNetworks?: Array<SiteNetworkEntry>) { 
        super();
        this['request_id'] = requestId;
        this['site_networks'] = siteNetworks;
    }
    public withRequestId(requestId: string): ListSiteNetworksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSiteNetworksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withSiteNetworks(siteNetworks: Array<SiteNetworkEntry>): ListSiteNetworksResponse {
        this['site_networks'] = siteNetworks;
        return this;
    }
    public set siteNetworks(siteNetworks: Array<SiteNetworkEntry>  | undefined) {
        this['site_networks'] = siteNetworks;
    }
    public get siteNetworks(): Array<SiteNetworkEntry> | undefined {
        return this['site_networks'];
    }
}