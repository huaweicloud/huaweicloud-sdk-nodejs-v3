import { SecurityReportContentResponseReportContentSubscriptionInfoTimeline } from './SecurityReportContentResponseReportContentSubscriptionInfoTimeline';


export class SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoTimeline>): SecurityReportContentResponseReportContentSubscriptionInfoRequestStatisticsInfoList {
        this['timeline'] = timeline;
        return this;
    }
}