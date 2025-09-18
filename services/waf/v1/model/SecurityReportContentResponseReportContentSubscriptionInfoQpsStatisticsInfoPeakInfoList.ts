import { SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentSubscriptionInfoQpsStatisticsInfoPeakInfoList {
        this['timeline'] = timeline;
        return this;
    }
}