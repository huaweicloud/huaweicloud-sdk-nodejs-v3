import { BatchDeleteDashboardRespInfo } from './BatchDeleteDashboardRespInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDashboardsResponse extends SdkResponse {
    public dashboards?: Array<BatchDeleteDashboardRespInfo>;
    public constructor() { 
        super();
    }
    public withDashboards(dashboards: Array<BatchDeleteDashboardRespInfo>): DeleteDashboardsResponse {
        this['dashboards'] = dashboards;
        return this;
    }
}