import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline>): SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList {
        this['timeline'] = timeline;
        return this;
    }
}