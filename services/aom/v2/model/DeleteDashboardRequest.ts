

export class DeleteDashboardRequest {
    private 'dashboard_id'?: string;
    private 'Enterprise-Project-Id'?: string;
    public constructor(dashboardId?: string) { 
        this['dashboard_id'] = dashboardId;
    }
    public withDashboardId(dashboardId: string): DeleteDashboardRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteDashboardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}