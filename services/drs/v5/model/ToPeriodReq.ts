

export class ToPeriodReq {
    private 'period_type'?: ToPeriodReqPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    public constructor(periodType?: string, periodNum?: number, isAutoRenew?: boolean, isAutoPay?: boolean) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['is_auto_renew'] = isAutoRenew;
        this['is_auto_pay'] = isAutoPay;
    }
    public withPeriodType(periodType: ToPeriodReqPeriodTypeEnum | string): ToPeriodReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: ToPeriodReqPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): ToPeriodReqPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): ToPeriodReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): ToPeriodReq {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): ToPeriodReq {
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
export enum ToPeriodReqPeriodTypeEnum {
    E_2 = '2',
    E_3 = '3'
}
