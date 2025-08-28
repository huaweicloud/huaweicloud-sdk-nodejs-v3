

export class CreateInstanceExtendParam {
    private 'charge_mode'?: CreateInstanceExtendParamChargeModeEnum | string;
    private 'period_type'?: CreateInstanceExtendParamPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: CreateInstanceExtendParamIsAutoRenewEnum | string;
    private 'is_auto_pay'?: CreateInstanceExtendParamIsAutoPayEnum | string;
    public constructor() { 
    }
    public withChargeMode(chargeMode: CreateInstanceExtendParamChargeModeEnum | string): CreateInstanceExtendParam {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateInstanceExtendParamChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateInstanceExtendParamChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: CreateInstanceExtendParamPeriodTypeEnum | string): CreateInstanceExtendParam {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: CreateInstanceExtendParamPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): CreateInstanceExtendParamPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateInstanceExtendParam {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: CreateInstanceExtendParamIsAutoRenewEnum | string): CreateInstanceExtendParam {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: CreateInstanceExtendParamIsAutoRenewEnum | string  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): CreateInstanceExtendParamIsAutoRenewEnum | string | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: CreateInstanceExtendParamIsAutoPayEnum | string): CreateInstanceExtendParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: CreateInstanceExtendParamIsAutoPayEnum | string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): CreateInstanceExtendParamIsAutoPayEnum | string | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceExtendParamChargeModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceExtendParamPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceExtendParamIsAutoRenewEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceExtendParamIsAutoPayEnum {
    TRUE = 'true',
    FALSE = 'false'
}
