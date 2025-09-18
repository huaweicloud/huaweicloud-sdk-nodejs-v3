

export class CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
    private 'overview_statistics_enable'?: boolean;
    private 'group_by_day_enable'?: boolean;
    private 'request_statistics_enable'?: boolean;
    private 'qps_statistics_enable'?: boolean;
    private 'bandwidth_statistics_enable'?: boolean;
    private 'response_code_statistics_enable'?: boolean;
    private 'attack_type_distribution_enable'?: boolean;
    private 'top_attacked_domains_enable'?: boolean;
    private 'top_attack_source_ips_enable'?: boolean;
    private 'top_attacked_urls_enable'?: boolean;
    private 'top_attack_source_locations_enable'?: boolean;
    private 'top_error_pages_enable'?: boolean;
    public constructor() { 
    }
    public withOverviewStatisticsEnable(overviewStatisticsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['overview_statistics_enable'] = overviewStatisticsEnable;
        return this;
    }
    public set overviewStatisticsEnable(overviewStatisticsEnable: boolean  | undefined) {
        this['overview_statistics_enable'] = overviewStatisticsEnable;
    }
    public get overviewStatisticsEnable(): boolean | undefined {
        return this['overview_statistics_enable'];
    }
    public withGroupByDayEnable(groupByDayEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['group_by_day_enable'] = groupByDayEnable;
        return this;
    }
    public set groupByDayEnable(groupByDayEnable: boolean  | undefined) {
        this['group_by_day_enable'] = groupByDayEnable;
    }
    public get groupByDayEnable(): boolean | undefined {
        return this['group_by_day_enable'];
    }
    public withRequestStatisticsEnable(requestStatisticsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['request_statistics_enable'] = requestStatisticsEnable;
        return this;
    }
    public set requestStatisticsEnable(requestStatisticsEnable: boolean  | undefined) {
        this['request_statistics_enable'] = requestStatisticsEnable;
    }
    public get requestStatisticsEnable(): boolean | undefined {
        return this['request_statistics_enable'];
    }
    public withQpsStatisticsEnable(qpsStatisticsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['qps_statistics_enable'] = qpsStatisticsEnable;
        return this;
    }
    public set qpsStatisticsEnable(qpsStatisticsEnable: boolean  | undefined) {
        this['qps_statistics_enable'] = qpsStatisticsEnable;
    }
    public get qpsStatisticsEnable(): boolean | undefined {
        return this['qps_statistics_enable'];
    }
    public withBandwidthStatisticsEnable(bandwidthStatisticsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['bandwidth_statistics_enable'] = bandwidthStatisticsEnable;
        return this;
    }
    public set bandwidthStatisticsEnable(bandwidthStatisticsEnable: boolean  | undefined) {
        this['bandwidth_statistics_enable'] = bandwidthStatisticsEnable;
    }
    public get bandwidthStatisticsEnable(): boolean | undefined {
        return this['bandwidth_statistics_enable'];
    }
    public withResponseCodeStatisticsEnable(responseCodeStatisticsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['response_code_statistics_enable'] = responseCodeStatisticsEnable;
        return this;
    }
    public set responseCodeStatisticsEnable(responseCodeStatisticsEnable: boolean  | undefined) {
        this['response_code_statistics_enable'] = responseCodeStatisticsEnable;
    }
    public get responseCodeStatisticsEnable(): boolean | undefined {
        return this['response_code_statistics_enable'];
    }
    public withAttackTypeDistributionEnable(attackTypeDistributionEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['attack_type_distribution_enable'] = attackTypeDistributionEnable;
        return this;
    }
    public set attackTypeDistributionEnable(attackTypeDistributionEnable: boolean  | undefined) {
        this['attack_type_distribution_enable'] = attackTypeDistributionEnable;
    }
    public get attackTypeDistributionEnable(): boolean | undefined {
        return this['attack_type_distribution_enable'];
    }
    public withTopAttackedDomainsEnable(topAttackedDomainsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['top_attacked_domains_enable'] = topAttackedDomainsEnable;
        return this;
    }
    public set topAttackedDomainsEnable(topAttackedDomainsEnable: boolean  | undefined) {
        this['top_attacked_domains_enable'] = topAttackedDomainsEnable;
    }
    public get topAttackedDomainsEnable(): boolean | undefined {
        return this['top_attacked_domains_enable'];
    }
    public withTopAttackSourceIpsEnable(topAttackSourceIpsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['top_attack_source_ips_enable'] = topAttackSourceIpsEnable;
        return this;
    }
    public set topAttackSourceIpsEnable(topAttackSourceIpsEnable: boolean  | undefined) {
        this['top_attack_source_ips_enable'] = topAttackSourceIpsEnable;
    }
    public get topAttackSourceIpsEnable(): boolean | undefined {
        return this['top_attack_source_ips_enable'];
    }
    public withTopAttackedUrlsEnable(topAttackedUrlsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['top_attacked_urls_enable'] = topAttackedUrlsEnable;
        return this;
    }
    public set topAttackedUrlsEnable(topAttackedUrlsEnable: boolean  | undefined) {
        this['top_attacked_urls_enable'] = topAttackedUrlsEnable;
    }
    public get topAttackedUrlsEnable(): boolean | undefined {
        return this['top_attacked_urls_enable'];
    }
    public withTopAttackSourceLocationsEnable(topAttackSourceLocationsEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['top_attack_source_locations_enable'] = topAttackSourceLocationsEnable;
        return this;
    }
    public set topAttackSourceLocationsEnable(topAttackSourceLocationsEnable: boolean  | undefined) {
        this['top_attack_source_locations_enable'] = topAttackSourceLocationsEnable;
    }
    public get topAttackSourceLocationsEnable(): boolean | undefined {
        return this['top_attack_source_locations_enable'];
    }
    public withTopErrorPagesEnable(topErrorPagesEnable: boolean): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription {
        this['top_error_pages_enable'] = topErrorPagesEnable;
        return this;
    }
    public set topErrorPagesEnable(topErrorPagesEnable: boolean  | undefined) {
        this['top_error_pages_enable'] = topErrorPagesEnable;
    }
    public get topErrorPagesEnable(): boolean | undefined {
        return this['top_error_pages_enable'];
    }
}