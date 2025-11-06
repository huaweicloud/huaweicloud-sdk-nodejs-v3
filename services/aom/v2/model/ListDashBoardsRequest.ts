

export class ListDashBoardsRequest {
    private 'dashboard_type'?: string;
    private 'Enterprise-Project-Id'?: string;
    public constructor() { 
    }
    public withDashboardType(dashboardType: string): ListDashBoardsRequest {
        this['dashboard_type'] = dashboardType;
        return this;
    }
    public set dashboardType(dashboardType: string  | undefined) {
        this['dashboard_type'] = dashboardType;
    }
    public get dashboardType(): string | undefined {
        return this['dashboard_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDashBoardsRequest {
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