

export class ChargeInfoResult {
    private 'charge_mode'?: string;
    private 'period_type'?: string;
    private 'period_num'?: string;
    private 'is_auto_renew'?: string;
    private 'is_auto_pay'?: string;
    public constructor() { 
    }
    public withChargeMode(chargeMode: string): ChargeInfoResult {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: string): ChargeInfoResult {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: string): ChargeInfoResult {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: string  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): string | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: string): ChargeInfoResult {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: string  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): string | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: string): ChargeInfoResult {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}