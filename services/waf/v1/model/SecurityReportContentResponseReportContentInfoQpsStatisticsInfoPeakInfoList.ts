import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList {
        this['timeline'] = timeline;
        return this;
    }
}