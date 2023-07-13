

export class CreatePrePaidPublicipExtendParamOption {
    private 'charge_mode'?: CreatePrePaidPublicipExtendParamOptionChargeModeEnum | undefined;
    private 'period_type'?: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | undefined;
    private 'period_num'?: number | undefined;
    private 'is_auto_renew'?: boolean | undefined;
    private 'is_auto_pay'?: boolean | undefined;
    public constructor() { 
    }
    public withChargeMode(chargeMode: CreatePrePaidPublicipExtendParamOptionChargeModeEnum): CreatePrePaidPublicipExtendParamOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreatePrePaidPublicipExtendParamOptionChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum): CreatePrePaidPublicipExtendParamOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreatePrePaidPublicipExtendParamOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): CreatePrePaidPublicipExtendParamOption {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew() {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): CreatePrePaidPublicipExtendParamOption {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePrePaidPublicipExtendParamOptionChargeModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
