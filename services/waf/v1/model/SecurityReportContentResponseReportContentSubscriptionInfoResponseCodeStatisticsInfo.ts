import { SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList';


export class SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo {
    private 'response_source_waf_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>;
    private 'response_source_upstream_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>;
    public constructor() { 
    }
    public withResponseSourceWafInfoList(responseSourceWafInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo {
        this['response_source_waf_info_list'] = responseSourceWafInfoList;
        return this;
    }
    public set responseSourceWafInfoList(responseSourceWafInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>  | undefined) {
        this['response_source_waf_info_list'] = responseSourceWafInfoList;
    }
    public get responseSourceWafInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList> | undefined {
        return this['response_source_waf_info_list'];
    }
    public withResponseSourceUpstreamInfoList(responseSourceUpstreamInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfo {
        this['response_source_upstream_info_list'] = responseSourceUpstreamInfoList;
        return this;
    }
    public set responseSourceUpstreamInfoList(responseSourceUpstreamInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>  | undefined) {
        this['response_source_upstream_info_list'] = responseSourceUpstreamInfoList;
    }
    public get responseSourceUpstreamInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList> | undefined {
        return this['response_source_upstream_info_list'];
    }
}