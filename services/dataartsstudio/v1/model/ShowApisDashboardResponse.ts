import { StatisticForDashboard } from './StatisticForDashboard';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApisDashboardResponse extends SdkResponse {
    public dashboards?: Array<StatisticForDashboard>;
    public constructor() { 
        super();
    }
    public withDashboards(dashboards: Array<StatisticForDashboard>): ShowApisDashboardResponse {
        this['dashboards'] = dashboards;
        return this;
    }
}