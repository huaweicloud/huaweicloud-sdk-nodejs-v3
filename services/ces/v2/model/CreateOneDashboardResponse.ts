import { DashBoardIdItem } from './DashBoardIdItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOneDashboardResponse extends SdkResponse {
    private 'dashboard_id'?: string;
    public constructor() { 
        super();
    }
    public withDashboardId(dashboardId: string): CreateOneDashboardResponse {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
}