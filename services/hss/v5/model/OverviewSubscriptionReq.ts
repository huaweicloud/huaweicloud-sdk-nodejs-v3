

export class OverviewSubscriptionReq {
    private 'dashboard_status'?: boolean;
    private 'risky_trend_status'?: boolean;
    private 'risky_distribution_status'?: boolean;
    private 'top_risky_host_status'?: boolean;
    private 'top_account_crack_status'?: boolean;
    private 'host_info_status'?: boolean;
    public constructor() { 
    }
    public withDashboardStatus(dashboardStatus: boolean): OverviewSubscriptionReq {
        this['dashboard_status'] = dashboardStatus;
        return this;
    }
    public set dashboardStatus(dashboardStatus: boolean  | undefined) {
        this['dashboard_status'] = dashboardStatus;
    }
    public get dashboardStatus(): boolean | undefined {
        return this['dashboard_status'];
    }
    public withRiskyTrendStatus(riskyTrendStatus: boolean): OverviewSubscriptionReq {
        this['risky_trend_status'] = riskyTrendStatus;
        return this;
    }
    public set riskyTrendStatus(riskyTrendStatus: boolean  | undefined) {
        this['risky_trend_status'] = riskyTrendStatus;
    }
    public get riskyTrendStatus(): boolean | undefined {
        return this['risky_trend_status'];
    }
    public withRiskyDistributionStatus(riskyDistributionStatus: boolean): OverviewSubscriptionReq {
        this['risky_distribution_status'] = riskyDistributionStatus;
        return this;
    }
    public set riskyDistributionStatus(riskyDistributionStatus: boolean  | undefined) {
        this['risky_distribution_status'] = riskyDistributionStatus;
    }
    public get riskyDistributionStatus(): boolean | undefined {
        return this['risky_distribution_status'];
    }
    public withTopRiskyHostStatus(topRiskyHostStatus: boolean): OverviewSubscriptionReq {
        this['top_risky_host_status'] = topRiskyHostStatus;
        return this;
    }
    public set topRiskyHostStatus(topRiskyHostStatus: boolean  | undefined) {
        this['top_risky_host_status'] = topRiskyHostStatus;
    }
    public get topRiskyHostStatus(): boolean | undefined {
        return this['top_risky_host_status'];
    }
    public withTopAccountCrackStatus(topAccountCrackStatus: boolean): OverviewSubscriptionReq {
        this['top_account_crack_status'] = topAccountCrackStatus;
        return this;
    }
    public set topAccountCrackStatus(topAccountCrackStatus: boolean  | undefined) {
        this['top_account_crack_status'] = topAccountCrackStatus;
    }
    public get topAccountCrackStatus(): boolean | undefined {
        return this['top_account_crack_status'];
    }
    public withHostInfoStatus(hostInfoStatus: boolean): OverviewSubscriptionReq {
        this['host_info_status'] = hostInfoStatus;
        return this;
    }
    public set hostInfoStatus(hostInfoStatus: boolean  | undefined) {
        this['host_info_status'] = hostInfoStatus;
    }
    public get hostInfoStatus(): boolean | undefined {
        return this['host_info_status'];
    }
}