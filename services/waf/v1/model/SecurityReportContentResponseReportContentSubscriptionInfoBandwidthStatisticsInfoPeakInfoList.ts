import { SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline1 } from './SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline1';


export class SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline1>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline1>): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoPeakInfoList {
        this['timeline'] = timeline;
        return this;
    }
}