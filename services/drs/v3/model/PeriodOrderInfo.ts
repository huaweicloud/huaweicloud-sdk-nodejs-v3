

export class PeriodOrderInfo {
    private 'period_type'?: PeriodOrderInfoPeriodTypeEnum | undefined;
    private 'period_num'?: number | undefined;
    private 'is_auto_renew'?: PeriodOrderInfoIsAutoRenewEnum | undefined;
    public constructor() { 
    }
    public withPeriodType(periodType: PeriodOrderInfoPeriodTypeEnum): PeriodOrderInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PeriodOrderInfoPeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PeriodOrderInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: PeriodOrderInfoIsAutoRenewEnum): PeriodOrderInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: PeriodOrderInfoIsAutoRenewEnum | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew() {
        return this['is_auto_renew'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PeriodOrderInfoPeriodTypeEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum PeriodOrderInfoIsAutoRenewEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
