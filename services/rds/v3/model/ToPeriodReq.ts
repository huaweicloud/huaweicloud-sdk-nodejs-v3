

export class ToPeriodReq {
    private 'period_type'?: string;
    private 'period_num'?: number;
    private 'auto_pay_policy'?: string;
    private 'auto_renew_policy'?: string;
    public constructor(periodType?: string, periodNum?: number) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
    }
    public withPeriodType(periodType: string): ToPeriodReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
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
    public withAutoPayPolicy(autoPayPolicy: string): ToPeriodReq {
        this['auto_pay_policy'] = autoPayPolicy;
        return this;
    }
    public set autoPayPolicy(autoPayPolicy: string  | undefined) {
        this['auto_pay_policy'] = autoPayPolicy;
    }
    public get autoPayPolicy(): string | undefined {
        return this['auto_pay_policy'];
    }
    public withAutoRenewPolicy(autoRenewPolicy: string): ToPeriodReq {
        this['auto_renew_policy'] = autoRenewPolicy;
        return this;
    }
    public set autoRenewPolicy(autoRenewPolicy: string  | undefined) {
        this['auto_renew_policy'] = autoRenewPolicy;
    }
    public get autoRenewPolicy(): string | undefined {
        return this['auto_renew_policy'];
    }
}