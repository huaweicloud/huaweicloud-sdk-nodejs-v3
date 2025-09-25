import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline>): SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList {
        this['timeline'] = timeline;
        return this;
    }
}