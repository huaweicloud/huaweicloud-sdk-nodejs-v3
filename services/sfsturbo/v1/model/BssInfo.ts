

export class BssInfo {
    private 'is_auto_renew'?: BssInfoIsAutoRenewEnum | number;
    private 'period_num'?: number;
    private 'period_type'?: BssInfoPeriodTypeEnum | number;
    private 'is_auto_pay'?: BssInfoIsAutoPayEnum | number;
    public constructor(periodNum?: number, periodType?: number) { 
        this['period_num'] = periodNum;
        this['period_type'] = periodType;
    }
    public withIsAutoRenew(isAutoRenew: BssInfoIsAutoRenewEnum | number): BssInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: BssInfoIsAutoRenewEnum | number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): BssInfoIsAutoRenewEnum | number | undefined {
        return this['is_auto_renew'];
    }
    public withPeriodNum(periodNum: number): BssInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: BssInfoPeriodTypeEnum | number): BssInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: BssInfoPeriodTypeEnum | number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): BssInfoPeriodTypeEnum | number | undefined {
        return this['period_type'];
    }
    public withIsAutoPay(isAutoPay: BssInfoIsAutoPayEnum | number): BssInfo {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssInfoIsAutoPayEnum | number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): BssInfoIsAutoPayEnum | number | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssInfoIsAutoRenewEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum BssInfoPeriodTypeEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum BssInfoIsAutoPayEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
