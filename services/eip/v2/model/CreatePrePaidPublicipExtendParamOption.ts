

export class CreatePrePaidPublicipExtendParamOption {
    private 'charge_mode'?: CreatePrePaidPublicipExtendParamOptionChargeModeEnum | string;
    private 'period_type'?: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    public constructor() { 
    }
    public withChargeMode(chargeMode: CreatePrePaidPublicipExtendParamOptionChargeModeEnum | string): CreatePrePaidPublicipExtendParamOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreatePrePaidPublicipExtendParamOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreatePrePaidPublicipExtendParamOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | string): CreatePrePaidPublicipExtendParamOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): CreatePrePaidPublicipExtendParamOptionPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreatePrePaidPublicipExtendParamOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): CreatePrePaidPublicipExtendParamOption {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): CreatePrePaidPublicipExtendParamOption {
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
