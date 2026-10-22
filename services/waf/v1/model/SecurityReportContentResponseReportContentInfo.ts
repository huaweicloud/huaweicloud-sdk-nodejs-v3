import { SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList } from './SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo } from './SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList } from './SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfo } from './SecurityReportContentResponseReportContentInfoQpsStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList } from './SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList } from './SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList } from './SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList } from './SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList } from './SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList';
import { SecurityReportContentResponseReportContentInfoTopErrorPagesInfo } from './SecurityReportContentResponseReportContentInfoTopErrorPagesInfo';


export class SecurityReportContentResponseReportContentInfo {
    private 'overview_statistics_info_list'?: Array<SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList>;
    private 'request_statistics_info_list'?: Array<SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList>;
    private 'qps_statistics_info'?: SecurityReportContentResponseReportContentInfoQpsStatisticsInfo;
    private 'bandwidth_statistics_info'?: SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo;
    private 'response_code_statistics_info'?: SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo;
    private 'attack_type_distribution_info_list'?: Array<SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList>;
    private 'top_attacked_domains_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList>;
    private 'top_attack_source_ips_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList>;
    private 'top_attacked_urls_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList>;
    private 'top_attack_source_locations_info_list'?: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList>;
    private 'top_error_pages_info'?: SecurityReportContentResponseReportContentInfoTopErrorPagesInfo;
    public constructor() { 
    }
    public withOverviewStatisticsInfoList(overviewStatisticsInfoList: Array<SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['overview_statistics_info_list'] = overviewStatisticsInfoList;
        return this;
    }
    public set overviewStatisticsInfoList(overviewStatisticsInfoList: Array<SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList>  | undefined) {
        this['overview_statistics_info_list'] = overviewStatisticsInfoList;
    }
    public get overviewStatisticsInfoList(): Array<SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList> | undefined {
        return this['overview_statistics_info_list'];
    }
    public withRequestStatisticsInfoList(requestStatisticsInfoList: Array<SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['request_statistics_info_list'] = requestStatisticsInfoList;
        return this;
    }
    public set requestStatisticsInfoList(requestStatisticsInfoList: Array<SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList>  | undefined) {
        this['request_statistics_info_list'] = requestStatisticsInfoList;
    }
    public get requestStatisticsInfoList(): Array<SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList> | undefined {
        return this['request_statistics_info_list'];
    }
    public withQpsStatisticsInfo(qpsStatisticsInfo: SecurityReportContentResponseReportContentInfoQpsStatisticsInfo): SecurityReportContentResponseReportContentInfo {
        this['qps_statistics_info'] = qpsStatisticsInfo;
        return this;
    }
    public set qpsStatisticsInfo(qpsStatisticsInfo: SecurityReportContentResponseReportContentInfoQpsStatisticsInfo  | undefined) {
        this['qps_statistics_info'] = qpsStatisticsInfo;
    }
    public get qpsStatisticsInfo(): SecurityReportContentResponseReportContentInfoQpsStatisticsInfo | undefined {
        return this['qps_statistics_info'];
    }
    public withBandwidthStatisticsInfo(bandwidthStatisticsInfo: SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo): SecurityReportContentResponseReportContentInfo {
        this['bandwidth_statistics_info'] = bandwidthStatisticsInfo;
        return this;
    }
    public set bandwidthStatisticsInfo(bandwidthStatisticsInfo: SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo  | undefined) {
        this['bandwidth_statistics_info'] = bandwidthStatisticsInfo;
    }
    public get bandwidthStatisticsInfo(): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo | undefined {
        return this['bandwidth_statistics_info'];
    }
    public withResponseCodeStatisticsInfo(responseCodeStatisticsInfo: SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo): SecurityReportContentResponseReportContentInfo {
        this['response_code_statistics_info'] = responseCodeStatisticsInfo;
        return this;
    }
    public set responseCodeStatisticsInfo(responseCodeStatisticsInfo: SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo  | undefined) {
        this['response_code_statistics_info'] = responseCodeStatisticsInfo;
    }
    public get responseCodeStatisticsInfo(): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo | undefined {
        return this['response_code_statistics_info'];
    }
    public withAttackTypeDistributionInfoList(attackTypeDistributionInfoList: Array<SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList>): SecurityReportContentResponseReportContentInfo {
        this['attack_type_distribution_info_list'] = attackTypeDistributionInfoList;
        return this;
    }
    public set attackTypeDistributionInfoList(attackTypeDistributionInfoList: Array<SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList>  | undefined) {
        this['attack_type_distribution_info_list'] = attackTypeDistributionInfoList;
    }
    public get attackTypeDistributionInfoList(): Array<SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList> | undefined {
        return this['attack_type_distribution_info_list'];
    }
    public withTopAttackedDomainsInfoList(topAttackedDomainsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['top_attacked_domains_info_list'] = topAttackedDomainsInfoList;
        return this;
    }
    public set topAttackedDomainsInfoList(topAttackedDomainsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList>  | undefined) {
        this['top_attacked_domains_info_list'] = topAttackedDomainsInfoList;
    }
    public get topAttackedDomainsInfoList(): Array<SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList> | undefined {
        return this['top_attacked_domains_info_list'];
    }
    public withTopAttackSourceIpsInfoList(topAttackSourceIpsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['top_attack_source_ips_info_list'] = topAttackSourceIpsInfoList;
        return this;
    }
    public set topAttackSourceIpsInfoList(topAttackSourceIpsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList>  | undefined) {
        this['top_attack_source_ips_info_list'] = topAttackSourceIpsInfoList;
    }
    public get topAttackSourceIpsInfoList(): Array<SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList> | undefined {
        return this['top_attack_source_ips_info_list'];
    }
    public withTopAttackedUrlsInfoList(topAttackedUrlsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['top_attacked_urls_info_list'] = topAttackedUrlsInfoList;
        return this;
    }
    public set topAttackedUrlsInfoList(topAttackedUrlsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList>  | undefined) {
        this['top_attacked_urls_info_list'] = topAttackedUrlsInfoList;
    }
    public get topAttackedUrlsInfoList(): Array<SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList> | undefined {
        return this['top_attacked_urls_info_list'];
    }
    public withTopAttackSourceLocationsInfoList(topAttackSourceLocationsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList>): SecurityReportContentResponseReportContentInfo {
        this['top_attack_source_locations_info_list'] = topAttackSourceLocationsInfoList;
        return this;
    }
    public set topAttackSourceLocationsInfoList(topAttackSourceLocationsInfoList: Array<SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList>  | undefined) {
        this['top_attack_source_locations_info_list'] = topAttackSourceLocationsInfoList;
    }
    public get topAttackSourceLocationsInfoList(): Array<SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList> | undefined {
        return this['top_attack_source_locations_info_list'];
    }
    public withTopErrorPagesInfo(topErrorPagesInfo: SecurityReportContentResponseReportContentInfoTopErrorPagesInfo): SecurityReportContentResponseReportContentInfo {
        this['top_error_pages_info'] = topErrorPagesInfo;
        return this;
    }
    public set topErrorPagesInfo(topErrorPagesInfo: SecurityReportContentResponseReportContentInfoTopErrorPagesInfo  | undefined) {
        this['top_error_pages_info'] = topErrorPagesInfo;
    }
    public get topErrorPagesInfo(): SecurityReportContentResponseReportContentInfoTopErrorPagesInfo | undefined {
        return this['top_error_pages_info'];
    }
}