

export class ShowDashBoardRequest {
    private 'dashboard_id'?: string;
    private 'Enterprise-Project-Id'?: string;
    public version?: string;
    public constructor(dashboardId?: string, version?: string) { 
        this['dashboard_id'] = dashboardId;
        this['version'] = version;
    }
    public withDashboardId(dashboardId: string): ShowDashBoardRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDashBoardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withVersion(version: string): ShowDashBoardRequest {
        this['version'] = version;
        return this;
    }
}