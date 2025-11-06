import { SecurityReportContentResponseReportContentInfoTopDomains } from './SecurityReportContentResponseReportContentInfoTopDomains';


export class SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo {
    public key?: string;
    public num?: number;
    private 'top_domains'?: Array<SecurityReportContentResponseReportContentInfoTopDomains>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo {
        this['num'] = num;
        return this;
    }
    public withTopDomains(topDomains: Array<SecurityReportContentResponseReportContentInfoTopDomains>): SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo {
        this['top_domains'] = topDomains;
        return this;
    }
    public set topDomains(topDomains: Array<SecurityReportContentResponseReportContentInfoTopDomains>  | undefined) {
        this['top_domains'] = topDomains;
    }
    public get topDomains(): Array<SecurityReportContentResponseReportContentInfoTopDomains> | undefined {
        return this['top_domains'];
    }
}