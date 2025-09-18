import { SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList } from './SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList';


export class SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo {
    private 'average_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList>;
    private 'peak_info_list'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList>;
    public constructor() { 
    }
    public withAverageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo {
        this['average_info_list'] = averageInfoList;
        return this;
    }
    public set averageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList>  | undefined) {
        this['average_info_list'] = averageInfoList;
    }
    public get averageInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList> | undefined {
        return this['average_info_list'];
    }
    public withPeakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList>): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfo {
        this['peak_info_list'] = peakInfoList;
        return this;
    }
    public set peakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList>  | undefined) {
        this['peak_info_list'] = peakInfoList;
    }
    public get peakInfoList(): Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList> | undefined {
        return this['peak_info_list'];
    }
}