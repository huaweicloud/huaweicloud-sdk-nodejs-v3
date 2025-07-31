

export class QuotaStatisticsInfo {
    public version?: QuotaStatisticsInfoVersionEnum | string;
    private 'idle_num'?: number;
    private 'used_num'?: number;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withVersion(version: QuotaStatisticsInfoVersionEnum | string): QuotaStatisticsInfo {
        this['version'] = version;
        return this;
    }
    public withIdleNum(idleNum: number): QuotaStatisticsInfo {
        this['idle_num'] = idleNum;
        return this;
    }
    public set idleNum(idleNum: number  | undefined) {
        this['idle_num'] = idleNum;
    }
    public get idleNum(): number | undefined {
        return this['idle_num'];
    }
    public withUsedNum(usedNum: number): QuotaStatisticsInfo {
        this['used_num'] = usedNum;
        return this;
    }
    public set usedNum(usedNum: number  | undefined) {
        this['used_num'] = usedNum;
    }
    public get usedNum(): number | undefined {
        return this['used_num'];
    }
    public withTotalNum(totalNum: number): QuotaStatisticsInfo {
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

/**
    * @export
    * @enum {string}
    */
export enum QuotaStatisticsInfoVersionEnum {
    HSS_VERSION_BASIC = 'hss.version.basic',
    HSS_VERSION_ENTERPRISE = 'hss.version.enterprise',
    HSS_VERSION_PREMIUM = 'hss.version.premium',
    HSS_VERSION_WTP = 'hss.version.wtp',
    HSS_VERSION_CONTAINER_ENTERPRISE = 'hss.version.container.enterprise'
}
