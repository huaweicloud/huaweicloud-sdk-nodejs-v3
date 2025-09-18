import { SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo } from './SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo';
import { SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo } from './SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo';
import { SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo } from './SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo';
import { SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo } from './SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList';


export class SecurityReportContentResponseReportContentSubscriptionInfo {
    private 'overview_statistics_list_info'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo>;
    private 'request_statistics_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList>;
    private 'qps_statistics_info'?: SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo;
    private 'bandwidth_statistics_info'?: SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo;
    private 'response_code_statistics_info'?: SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo;
    private 'attack_type_distribution_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList>;
    private 'top_attacked_domains_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList>;
    private 'top_attack_source_ips_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList>;
    private 'top_attacked_urls_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList>;
    private 'top_attack_source_locations_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList>;
    private 'top_abnormal_urls_info'?: SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo;
    public constructor() { 
    }
    public withOverviewStatisticsListInfo(overviewStatisticsListInfo: Array<SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['overview_statistics_list_info'] = overviewStatisticsListInfo;
        return this;
    }
    public set overviewStatisticsListInfo(overviewStatisticsListInfo: Array<SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo>  | undefined) {
        this['overview_statistics_list_info'] = overviewStatisticsListInfo;
    }
    public get overviewStatisticsListInfo(): Array<SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo> | undefined {
        return this['overview_statistics_list_info'];
    }
    public withRequestStatisticsInfoList(requestStatisticsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['request_statistics_info_list'] = requestStatisticsInfoList;
        return this;
    }
    public set requestStatisticsInfoList(requestStatisticsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList>  | undefined) {
        this['request_statistics_info_list'] = requestStatisticsInfoList;
    }
    public get requestStatisticsInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList> | undefined {
        return this['request_statistics_info_list'];
    }
    public withQpsStatisticsInfo(qpsStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['qps_statistics_info'] = qpsStatisticsInfo;
        return this;
    }
    public set qpsStatisticsInfo(qpsStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo  | undefined) {
        this['qps_statistics_info'] = qpsStatisticsInfo;
    }
    public get qpsStatisticsInfo(): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo | undefined {
        return this['qps_statistics_info'];
    }
    public withBandwidthStatisticsInfo(bandwidthStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['bandwidth_statistics_info'] = bandwidthStatisticsInfo;
        return this;
    }
    public set bandwidthStatisticsInfo(bandwidthStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo  | undefined) {
        this['bandwidth_statistics_info'] = bandwidthStatisticsInfo;
    }
    public get bandwidthStatisticsInfo(): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo | undefined {
        return this['bandwidth_statistics_info'];
    }
    public withResponseCodeStatisticsInfo(responseCodeStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['response_code_statistics_info'] = responseCodeStatisticsInfo;
        return this;
    }
    public set responseCodeStatisticsInfo(responseCodeStatisticsInfo: SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo  | undefined) {
        this['response_code_statistics_info'] = responseCodeStatisticsInfo;
    }
    public get responseCodeStatisticsInfo(): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo | undefined {
        return this['response_code_statistics_info'];
    }
    public withAttackTypeDistributionInfoList(attackTypeDistributionInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['attack_type_distribution_info_list'] = attackTypeDistributionInfoList;
        return this;
    }
    public set attackTypeDistributionInfoList(attackTypeDistributionInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList>  | undefined) {
        this['attack_type_distribution_info_list'] = attackTypeDistributionInfoList;
    }
    public get attackTypeDistributionInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoAttackTypeDistributionInfoList> | undefined {
        return this['attack_type_distribution_info_list'];
    }
    public withTopAttackedDomainsInfoList(topAttackedDomainsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['top_attacked_domains_info_list'] = topAttackedDomainsInfoList;
        return this;
    }
    public set topAttackedDomainsInfoList(topAttackedDomainsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList>  | undefined) {
        this['top_attacked_domains_info_list'] = topAttackedDomainsInfoList;
    }
    public get topAttackedDomainsInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedDomainsInfoList> | undefined {
        return this['top_attacked_domains_info_list'];
    }
    public withTopAttackSourceIpsInfoList(topAttackSourceIpsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['top_attack_source_ips_info_list'] = topAttackSourceIpsInfoList;
        return this;
    }
    public set topAttackSourceIpsInfoList(topAttackSourceIpsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList>  | undefined) {
        this['top_attack_source_ips_info_list'] = topAttackSourceIpsInfoList;
    }
    public get topAttackSourceIpsInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceIpsInfoList> | undefined {
        return this['top_attack_source_ips_info_list'];
    }
    public withTopAttackedUrlsInfoList(topAttackedUrlsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['top_attacked_urls_info_list'] = topAttackedUrlsInfoList;
        return this;
    }
    public set topAttackedUrlsInfoList(topAttackedUrlsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList>  | undefined) {
        this['top_attacked_urls_info_list'] = topAttackedUrlsInfoList;
    }
    public get topAttackedUrlsInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackedUrlsInfoList> | undefined {
        return this['top_attacked_urls_info_list'];
    }
    public withTopAttackSourceLocationsInfoList(topAttackSourceLocationsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList>): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['top_attack_source_locations_info_list'] = topAttackSourceLocationsInfoList;
        return this;
    }
    public set topAttackSourceLocationsInfoList(topAttackSourceLocationsInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList>  | undefined) {
        this['top_attack_source_locations_info_list'] = topAttackSourceLocationsInfoList;
    }
    public get topAttackSourceLocationsInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopAttackSourceLocationsInfoList> | undefined {
        return this['top_attack_source_locations_info_list'];
    }
    public withTopAbnormalUrlsInfo(topAbnormalUrlsInfo: SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo): SecurityReportContentResponseReportContentSubscriptionInfo {
        this['top_abnormal_urls_info'] = topAbnormalUrlsInfo;
        return this;
    }
    public set topAbnormalUrlsInfo(topAbnormalUrlsInfo: SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo  | undefined) {
        this['top_abnormal_urls_info'] = topAbnormalUrlsInfo;
    }
    public get topAbnormalUrlsInfo(): SecurityReportContentResponseReportContentSubscriptionInfoTopAbnormalUrlsInfo | undefined {
        return this['top_abnormal_urls_info'];
    }
}