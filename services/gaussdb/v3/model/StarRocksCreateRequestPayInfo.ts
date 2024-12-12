

export class StarRocksCreateRequestPayInfo {
    private 'pay_model'?: string;
    public period?: string;
    private 'period_type'?: string;
    private 'is_auto_renew'?: string;
    public constructor() { 
    }
    public withPayModel(payModel: string): StarRocksCreateRequestPayInfo {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withPeriod(period: string): StarRocksCreateRequestPayInfo {
        this['period'] = period;
        return this;
    }
    public withPeriodType(periodType: string): StarRocksCreateRequestPayInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withIsAutoRenew(isAutoRenew: string): StarRocksCreateRequestPayInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: string  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): string | undefined {
        return this['is_auto_renew'];
    }
}