

export class ListDashboardInfosRequest {
    private 'enterprise_id'?: string;
    private 'is_favorite'?: boolean;
    private 'dashboard_name'?: string;
    private 'dashboard_id'?: string;
    private 'dashboard_type'?: ListDashboardInfosRequestDashboardTypeEnum | string;
    public constructor() { 
    }
    public withEnterpriseId(enterpriseId: string): ListDashboardInfosRequest {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withIsFavorite(isFavorite: boolean): ListDashboardInfosRequest {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
    public withDashboardName(dashboardName: string): ListDashboardInfosRequest {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
    public withDashboardId(dashboardId: string): ListDashboardInfosRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withDashboardType(dashboardType: ListDashboardInfosRequestDashboardTypeEnum | string): ListDashboardInfosRequest {
        this['dashboard_type'] = dashboardType;
        return this;
    }
    public set dashboardType(dashboardType: ListDashboardInfosRequestDashboardTypeEnum | string  | undefined) {
        this['dashboard_type'] = dashboardType;
    }
    public get dashboardType(): ListDashboardInfosRequestDashboardTypeEnum | string | undefined {
        return this['dashboard_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDashboardInfosRequestDashboardTypeEnum {
    MONITOR_DASHBOARD = 'monitor_dashboard',
    OTHER = 'other'
}
