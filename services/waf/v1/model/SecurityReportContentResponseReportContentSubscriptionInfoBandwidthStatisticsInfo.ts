import { SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList';


export class SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo {
    private 'average_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList>;
    private 'peak_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList>;
    public constructor() { 
    }
    public withAverageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo {
        this['average_info_list'] = averageInfoList;
        return this;
    }
    public set averageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList>  | undefined) {
        this['average_info_list'] = averageInfoList;
    }
    public get averageInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList> | undefined {
        return this['average_info_list'];
    }
    public withPeakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfo {
        this['peak_info_list'] = peakInfoList;
        return this;
    }
    public set peakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList>  | undefined) {
        this['peak_info_list'] = peakInfoList;
    }
    public get peakInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList> | undefined {
        return this['peak_info_list'];
    }
}