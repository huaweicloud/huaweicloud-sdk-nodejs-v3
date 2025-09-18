import { SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList {
        this['timeline'] = timeline;
        return this;
    }
}