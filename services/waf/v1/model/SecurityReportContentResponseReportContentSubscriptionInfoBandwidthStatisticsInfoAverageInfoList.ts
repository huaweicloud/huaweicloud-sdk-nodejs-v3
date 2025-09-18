import { SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline } from './SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline';


export class SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList {
    public key?: string;
    public timeline?: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoTimeline>): SecurityReportContentResponseReportContentSubscriptionInfoBandwidthStatisticsInfoAverageInfoList {
        this['timeline'] = timeline;
        return this;
    }
}