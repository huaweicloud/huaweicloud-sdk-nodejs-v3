import { GlobalConnectionBandwidthSites } from './GlobalConnectionBandwidthSites';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalConnectionBandwidthSitesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'site_infos'?: Array<GlobalConnectionBandwidthSites>;
    public constructor(requestId?: string, siteInfos?: Array<GlobalConnectionBandwidthSites>) { 
        super();
        this['request_id'] = requestId;
        this['site_infos'] = siteInfos;
    }
    public withRequestId(requestId: string): ListGlobalConnectionBandwidthSitesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGlobalConnectionBandwidthSitesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withSiteInfos(siteInfos: Array<GlobalConnectionBandwidthSites>): ListGlobalConnectionBandwidthSitesResponse {
        this['site_infos'] = siteInfos;
        return this;
    }
    public set siteInfos(siteInfos: Array<GlobalConnectionBandwidthSites>  | undefined) {
        this['site_infos'] = siteInfos;
    }
    public get siteInfos(): Array<GlobalConnectionBandwidthSites> | undefined {
        return this['site_infos'];
    }
}