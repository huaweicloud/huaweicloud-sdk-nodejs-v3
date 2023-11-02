import { StatisticForDashboard } from './StatisticForDashboard';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiDashboardResponse extends SdkResponse {
    public dashboards?: Array<StatisticForDashboard>;
    public constructor() { 
        super();
    }
    public withDashboards(dashboards: Array<StatisticForDashboard>): ShowApiDashboardResponse {
        this['dashboards'] = dashboards;
        return this;
    }
}