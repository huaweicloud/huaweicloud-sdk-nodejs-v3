import { EdgeSiteDetail } from './EdgeSiteDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEdgeSiteResponse extends SdkResponse {
    private 'edge_site'?: EdgeSiteDetail;
    public constructor() { 
        super();
    }
    public withEdgeSite(edgeSite: EdgeSiteDetail): CreateEdgeSiteResponse {
        this['edge_site'] = edgeSite;
        return this;
    }
    public set edgeSite(edgeSite: EdgeSiteDetail  | undefined) {
        this['edge_site'] = edgeSite;
    }
    public get edgeSite(): EdgeSiteDetail | undefined {
        return this['edge_site'];
    }
}