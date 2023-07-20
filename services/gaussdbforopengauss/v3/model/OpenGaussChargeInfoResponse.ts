

export class OpenGaussChargeInfoResponse {
    private 'charge_mode'?: OpenGaussChargeInfoResponseChargeModeEnum | string;
    private 'period_type'?: OpenGaussChargeInfoResponsePeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: OpenGaussChargeInfoResponseChargeModeEnum | string): OpenGaussChargeInfoResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: OpenGaussChargeInfoResponseChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): OpenGaussChargeInfoResponseChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: OpenGaussChargeInfoResponsePeriodTypeEnum | string): OpenGaussChargeInfoResponse {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: OpenGaussChargeInfoResponsePeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): OpenGaussChargeInfoResponsePeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): OpenGaussChargeInfoResponse {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): OpenGaussChargeInfoResponse {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): OpenGaussChargeInfoResponse {
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
export enum OpenGaussChargeInfoResponseChargeModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussChargeInfoResponsePeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
