import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList } from './SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList } from './SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList';


export class SecurityReportContentResponseReportContentInfoQpsStatisticsInfo {
    private 'average_info_list'?: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList>;
    private 'peak_info_list'?: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList>;
    public constructor() { 
    }
    public withAverageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfo {
        this['average_info_list'] = averageInfoList;
        return this;
    }
    public set averageInfoList(averageInfoList: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList>  | undefined) {
        this['average_info_list'] = averageInfoList;
    }
    public get averageInfoList(): Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList> | undefined {
        return this['average_info_list'];
    }
    public withPeakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfo {
        this['peak_info_list'] = peakInfoList;
        return this;
    }
    public set peakInfoList(peakInfoList: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList>  | undefined) {
        this['peak_info_list'] = peakInfoList;
    }
    public get peakInfoList(): Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList> | undefined {
        return this['peak_info_list'];
    }
}