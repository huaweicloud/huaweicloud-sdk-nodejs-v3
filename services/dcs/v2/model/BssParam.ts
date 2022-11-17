

export class BssParam {
    private 'is_auto_renew'?: BssParamIsAutoRenewEnum | undefined;
    private 'charging_mode': BssParamChargingModeEnum | undefined;
    private 'is_auto_pay'?: BssParamIsAutoPayEnum | undefined;
    private 'period_type'?: BssParamPeriodTypeEnum | undefined;
    private 'period_num'?: number | undefined;
    public constructor(chargingMode?: any) { 
        this['charging_mode'] = chargingMode;
    }
    public withIsAutoRenew(isAutoRenew: BssParamIsAutoRenewEnum): BssParam {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: BssParamIsAutoRenewEnum | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew() {
        return this['is_auto_renew'];
    }
    public withChargingMode(chargingMode: BssParamChargingModeEnum): BssParam {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BssParamChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withIsAutoPay(isAutoPay: BssParamIsAutoPayEnum): BssParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssParamIsAutoPayEnum | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
    public withPeriodType(periodType: BssParamPeriodTypeEnum): BssParam {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: BssParamPeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): BssParam {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
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
