

export class QuotaStatisticsResponseInfo {
    public version?: string;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withVersion(version: string): QuotaStatisticsResponseInfo {
        this['version'] = version;
        return this;
    }
    public withTotalNum(totalNum: number): QuotaStatisticsResponseInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}