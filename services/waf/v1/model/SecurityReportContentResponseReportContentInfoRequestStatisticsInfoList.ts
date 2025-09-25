import { SecurityReportContentResponseReportContentInfoTimeline } from './SecurityReportContentResponseReportContentInfoTimeline';


export class SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoTimeline>): SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList {
        this['timeline'] = timeline;
        return this;
    }
}