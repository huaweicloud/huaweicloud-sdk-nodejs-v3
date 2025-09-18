import { SecurityReportContentResponseReportContentSubscriptionInfoTopDomains } from './SecurityReportContentResponseReportContentSubscriptionInfoTopDomains';


export class SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo {
    public key?: string;
    public num?: number;
    private 'top_domains'?: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopDomains>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo {
        this['num'] = num;
        return this;
    }
    public withTopDomains(topDomains: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopDomains>): SecurityReportContentResponseReportContentSubscriptionInfoOverviewStatisticsListInfo {
        this['top_domains'] = topDomains;
        return this;
    }
    public set topDomains(topDomains: Array<SecurityReportContentResponseReportContentSubscriptionInfoTopDomains>  | undefined) {
        this['top_domains'] = topDomains;
    }
    public get topDomains(): Array<SecurityReportContentResponseReportContentSubscriptionInfoTopDomains> | undefined {
        return this['top_domains'];
    }
}