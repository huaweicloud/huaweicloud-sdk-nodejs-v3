import { SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline>): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoAverageInfoList {
        this['timeline'] = timeline;
        return this;
    }
}