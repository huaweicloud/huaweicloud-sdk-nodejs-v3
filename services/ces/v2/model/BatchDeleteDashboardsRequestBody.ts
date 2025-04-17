

export class BatchDeleteDashboardsRequestBody {
    private 'dashboard_ids'?: Array<string>;
    public constructor() { 
    }
    public withDashboardIds(dashboardIds: Array<string>): BatchDeleteDashboardsRequestBody {
        this['dashboard_ids'] = dashboardIds;
        return this;
    }
    public set dashboardIds(dashboardIds: Array<string>  | undefined) {
        this['dashboard_ids'] = dashboardIds;
    }
    public get dashboardIds(): Array<string> | undefined {
        return this['dashboard_ids'];
    }
}