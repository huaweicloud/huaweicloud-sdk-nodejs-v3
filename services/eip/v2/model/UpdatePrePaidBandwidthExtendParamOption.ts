

export class UpdatePrePaidBandwidthExtendParamOption {
    private 'period_type'?: UpdatePrePaidBandwidthExtendParamOptionPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_pay'?: boolean;
    public constructor() { 
    }
    public withPeriodType(periodType: UpdatePrePaidBandwidthExtendParamOptionPeriodTypeEnum | string): UpdatePrePaidBandwidthExtendParamOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: UpdatePrePaidBandwidthExtendParamOptionPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): UpdatePrePaidBandwidthExtendParamOptionPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): UpdatePrePaidBandwidthExtendParamOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoPay(isAutoPay: boolean): UpdatePrePaidBandwidthExtendParamOption {
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
export enum UpdatePrePaidBandwidthExtendParamOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
