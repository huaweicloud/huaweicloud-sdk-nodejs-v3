

export class OpenGaussChargeInfo {
    private 'charge_mode'?: OpenGaussChargeInfoChargeModeEnum | string;
    private 'period_type'?: OpenGaussChargeInfoPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: OpenGaussChargeInfoChargeModeEnum | string): OpenGaussChargeInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: OpenGaussChargeInfoChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): OpenGaussChargeInfoChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: OpenGaussChargeInfoPeriodTypeEnum | string): OpenGaussChargeInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: OpenGaussChargeInfoPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): OpenGaussChargeInfoPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): OpenGaussChargeInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): OpenGaussChargeInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): OpenGaussChargeInfo {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussChargeInfoChargeModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussChargeInfoPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
