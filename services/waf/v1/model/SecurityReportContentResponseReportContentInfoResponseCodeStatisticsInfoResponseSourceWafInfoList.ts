import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
        this['timeline'] = timeline;
        return this;
    }
}