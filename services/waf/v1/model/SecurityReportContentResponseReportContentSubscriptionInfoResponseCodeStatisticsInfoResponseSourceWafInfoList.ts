import { SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoTimeline>): SecurityReportContentResponseReportContentSubscriptionInfoResponseCodeStatisticsInfoResponseSourceWafInfoList {
        this['timeline'] = timeline;
        return this;
    }
}