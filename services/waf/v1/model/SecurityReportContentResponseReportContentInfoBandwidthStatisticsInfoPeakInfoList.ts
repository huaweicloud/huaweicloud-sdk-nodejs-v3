import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList {
        this['timeline'] = timeline;
        return this;
    }
}