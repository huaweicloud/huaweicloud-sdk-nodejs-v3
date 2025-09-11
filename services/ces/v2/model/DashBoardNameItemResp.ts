

export class DashBoardNameItemResp {
    private 'dashboard_name'?: string;
    public constructor() { 
    }
    public withDashboardName(dashboardName: string): DashBoardNameItemResp {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
}