import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
        this['timeline'] = timeline;
        return this;
    }
}