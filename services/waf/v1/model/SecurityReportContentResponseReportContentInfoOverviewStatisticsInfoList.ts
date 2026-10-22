import { SecurityReportContentResponseReportContentInfoTopDomains } from './SecurityReportContentResponseReportContentInfoTopDomains';


export class SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
    public key?: string;
    public num?: number;
    private 'block_num'?: number;
    private 'only_log_num'?: number;
    private 'top_domains'?: Array<SecurityReportContentResponseReportContentInfoTopDomains>;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
        this['num'] = num;
        return this;
    }
    public withBlockNum(blockNum: number): SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
        this['block_num'] = blockNum;
        return this;
    }
    public set blockNum(blockNum: number  | undefined) {
        this['block_num'] = blockNum;
    }
    public get blockNum(): number | undefined {
        return this['block_num'];
    }
    public withOnlyLogNum(onlyLogNum: number): SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
        this['only_log_num'] = onlyLogNum;
        return this;
    }
    public set onlyLogNum(onlyLogNum: number  | undefined) {
        this['only_log_num'] = onlyLogNum;
    }
    public get onlyLogNum(): number | undefined {
        return this['only_log_num'];
    }
    public withTopDomains(topDomains: Array<SecurityReportContentResponseReportContentInfoTopDomains>): SecurityReportContentResponseReportContentInfoOverviewStatisticsInfoList {
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