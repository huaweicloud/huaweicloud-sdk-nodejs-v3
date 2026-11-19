

export class OverviewInfoRes {
    private 'dashboard_info_list'?: Array<object>;
    private 'risky_trend_info_list'?: Array<object>;
    private 'risky_distribution_info_list'?: Array<object>;
    private 'top_risky_host_info_list'?: Array<object>;
    private 'top_account_crack_info_list'?: Array<object>;
    private 'host_info_list'?: Array<object>;
    private 'overall_situation_info_list'?: Array<object>;
    public constructor() { 
    }
    public withDashboardInfoList(dashboardInfoList: Array<object>): OverviewInfoRes {
        this['dashboard_info_list'] = dashboardInfoList;
        return this;
    }
    public set dashboardInfoList(dashboardInfoList: Array<object>  | undefined) {
        this['dashboard_info_list'] = dashboardInfoList;
    }
    public get dashboardInfoList(): Array<object> | undefined {
        return this['dashboard_info_list'];
    }
    public withRiskyTrendInfoList(riskyTrendInfoList: Array<object>): OverviewInfoRes {
        this['risky_trend_info_list'] = riskyTrendInfoList;
        return this;
    }
    public set riskyTrendInfoList(riskyTrendInfoList: Array<object>  | undefined) {
        this['risky_trend_info_list'] = riskyTrendInfoList;
    }
    public get riskyTrendInfoList(): Array<object> | undefined {
        return this['risky_trend_info_list'];
    }
    public withRiskyDistributionInfoList(riskyDistributionInfoList: Array<object>): OverviewInfoRes {
        this['risky_distribution_info_list'] = riskyDistributionInfoList;
        return this;
    }
    public set riskyDistributionInfoList(riskyDistributionInfoList: Array<object>  | undefined) {
        this['risky_distribution_info_list'] = riskyDistributionInfoList;
    }
    public get riskyDistributionInfoList(): Array<object> | undefined {
        return this['risky_distribution_info_list'];
    }
    public withTopRiskyHostInfoList(topRiskyHostInfoList: Array<object>): OverviewInfoRes {
        this['top_risky_host_info_list'] = topRiskyHostInfoList;
        return this;
    }
    public set topRiskyHostInfoList(topRiskyHostInfoList: Array<object>  | undefined) {
        this['top_risky_host_info_list'] = topRiskyHostInfoList;
    }
    public get topRiskyHostInfoList(): Array<object> | undefined {
        return this['top_risky_host_info_list'];
    }
    public withTopAccountCrackInfoList(topAccountCrackInfoList: Array<object>): OverviewInfoRes {
        this['top_account_crack_info_list'] = topAccountCrackInfoList;
        return this;
    }
    public set topAccountCrackInfoList(topAccountCrackInfoList: Array<object>  | undefined) {
        this['top_account_crack_info_list'] = topAccountCrackInfoList;
    }
    public get topAccountCrackInfoList(): Array<object> | undefined {
        return this['top_account_crack_info_list'];
    }
    public withHostInfoList(hostInfoList: Array<object>): OverviewInfoRes {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<object>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<object> | undefined {
        return this['host_info_list'];
    }
    public withOverallSituationInfoList(overallSituationInfoList: Array<object>): OverviewInfoRes {
        this['overall_situation_info_list'] = overallSituationInfoList;
        return this;
    }
    public set overallSituationInfoList(overallSituationInfoList: Array<object>  | undefined) {
        this['overall_situation_info_list'] = overallSituationInfoList;
    }
    public get overallSituationInfoList(): Array<object> | undefined {
        return this['overall_situation_info_list'];
    }
}