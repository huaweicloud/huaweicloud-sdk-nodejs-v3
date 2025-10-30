import { EdgeSiteDetail } from './EdgeSiteDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEdgeSitesResponse extends SdkResponse {
    private 'edge_sites'?: Array<EdgeSiteDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withEdgeSites(edgeSites: Array<EdgeSiteDetail>): ListEdgeSitesResponse {
        this['edge_sites'] = edgeSites;
        return this;
    }
    public set edgeSites(edgeSites: Array<EdgeSiteDetail>  | undefined) {
        this['edge_sites'] = edgeSites;
    }
    public get edgeSites(): Array<EdgeSiteDetail> | undefined {
        return this['edge_sites'];
    }
    public withPageInfo(pageInfo: PageInfo): ListEdgeSitesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}