import { SecurityReportContentResponseReportContentInfoDetail } from './SecurityReportContentResponseReportContentInfoDetail';


export class SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList {
    public key?: string;
    public num?: number;
    public detail?: Array<SecurityReportContentResponseReportContentInfoDetail>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList {
        this['num'] = num;
        return this;
    }
    public withDetail(detail: Array<SecurityReportContentResponseReportContentInfoDetail>): SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList {
        this['detail'] = detail;
        return this;
    }
}