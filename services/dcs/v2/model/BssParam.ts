

export class BssParam {
    private 'is_auto_renew'?: BssParamIsAutoRenewEnum | string;
    private 'charging_mode'?: BssParamChargingModeEnum | string;
    private 'is_auto_pay'?: BssParamIsAutoPayEnum | string;
    private 'period_type'?: BssParamPeriodTypeEnum | string;
    private 'period_num'?: number;
    public constructor(chargingMode?: string) { 
        this['charging_mode'] = chargingMode;
    }
    public withIsAutoRenew(isAutoRenew: BssParamIsAutoRenewEnum | string): BssParam {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: BssParamIsAutoRenewEnum | string  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): BssParamIsAutoRenewEnum | string | undefined {
        return this['is_auto_renew'];
    }
    public withChargingMode(chargingMode: BssParamChargingModeEnum | string): BssParam {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BssParamChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): BssParamChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withIsAutoPay(isAutoPay: BssParamIsAutoPayEnum | string): BssParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssParamIsAutoPayEnum | string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): BssParamIsAutoPayEnum | string | undefined {
        return this['is_auto_pay'];
    }
    public withPeriodType(periodType: BssParamPeriodTypeEnum | string): BssParam {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: BssParamPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): BssParamPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): BssParam {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssParamIsAutoRenewEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamChargingModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamIsAutoPayEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
