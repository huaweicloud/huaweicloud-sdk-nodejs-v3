import { WksEdgeSiteDetail } from './WksEdgeSiteDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWksEdgeSitesResponse extends SdkResponse {
    private 'wks_edge_sites'?: Array<WksEdgeSiteDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withWksEdgeSites(wksEdgeSites: Array<WksEdgeSiteDetail>): ListWksEdgeSitesResponse {
        this['wks_edge_sites'] = wksEdgeSites;
        return this;
    }
    public set wksEdgeSites(wksEdgeSites: Array<WksEdgeSiteDetail>  | undefined) {
        this['wks_edge_sites'] = wksEdgeSites;
    }
    public get wksEdgeSites(): Array<WksEdgeSiteDetail> | undefined {
        return this['wks_edge_sites'];
    }
    public withTotalCount(totalCount: number): ListWksEdgeSitesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}