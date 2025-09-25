import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList } from './SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList } from './SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList';


export class SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo {
    private 'average_info_list'?: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList>;
    private 'peak_info_list'?: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList>;
    public constructor() { 
    }
    public withAverageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo {
        this['average_info_list'] = averageInfoList;
        return this;
    }
    public set averageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList>  | undefined) {
        this['average_info_list'] = averageInfoList;
    }
    public get averageInfoList(): Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList> | undefined {
        return this['average_info_list'];
    }
    public withPeakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo {
        this['peak_info_list'] = peakInfoList;
        return this;
    }
    public set peakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList>  | undefined) {
        this['peak_info_list'] = peakInfoList;
    }
    public get peakInfoList(): Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList> | undefined {
        return this['peak_info_list'];
    }
}