import { DashBoardInfo } from './DashBoardInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDashboardInfosResponse extends SdkResponse {
    public dashboards?: Array<DashBoardInfo>;
    public constructor() { 
        super();
    }
    public withDashboards(dashboards: Array<DashBoardInfo>): ListDashboardInfosResponse {
        this['dashboards'] = dashboards;
        return this;
    }
}