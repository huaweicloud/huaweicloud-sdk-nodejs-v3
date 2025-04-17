

export class ListDashboardWidgetsRequest {
    private 'dashboard_id'?: string;
    private 'group_id'?: string;
    public constructor(dashboardId?: string) { 
        this['dashboard_id'] = dashboardId;
    }
    public withDashboardId(dashboardId: string): ListDashboardWidgetsRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withGroupId(groupId: string): ListDashboardWidgetsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}