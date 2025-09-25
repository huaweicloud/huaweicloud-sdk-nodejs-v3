import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList';


export class SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo {
    private 'response_source_waf_info_list'?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>;
    private 'response_source_upstream_info_list'?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>;
    public constructor() { 
    }
    public withResponseSourceWafInfoList(responseSourceWafInfoList: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo {
        this['response_source_waf_info_list'] = responseSourceWafInfoList;
        return this;
    }
    public set responseSourceWafInfoList(responseSourceWafInfoList: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList>  | undefined) {
        this['response_source_waf_info_list'] = responseSourceWafInfoList;
    }
    public get responseSourceWafInfoList(): Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList> | undefined {
        return this['response_source_waf_info_list'];
    }
    public withResponseSourceUpstreamInfoList(responseSourceUpstreamInfoList: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo {
        this['response_source_upstream_info_list'] = responseSourceUpstreamInfoList;
        return this;
    }
    public set responseSourceUpstreamInfoList(responseSourceUpstreamInfoList: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList>  | undefined) {
        this['response_source_upstream_info_list'] = responseSourceUpstreamInfoList;
    }
    public get responseSourceUpstreamInfoList(): Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList> | undefined {
        return this['response_source_upstream_info_list'];
    }
}