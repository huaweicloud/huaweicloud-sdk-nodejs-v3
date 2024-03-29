

export class DashBoardIdItem {
    private 'dashboard_id'?: string;
    public constructor() { 
    }
    public withDashboardId(dashboardId: string): DashBoardIdItem {
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