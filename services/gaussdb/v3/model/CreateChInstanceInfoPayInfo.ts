

export class CreateChInstanceInfoPayInfo {
    private 'pay_model'?: string;
    private 'order_id'?: string;
    public period?: string;
    private 'period_type'?: string;
    private 'is_auto_renew'?: string;
    public constructor(payModel?: string, orderId?: string, period?: string, periodType?: string, isAutoRenew?: string) { 
        this['pay_model'] = payModel;
        this['order_id'] = orderId;
        this['period'] = period;
        this['period_type'] = periodType;
        this['is_auto_renew'] = isAutoRenew;
    }
    public withPayModel(payModel: string): CreateChInstanceInfoPayInfo {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): CreateChInstanceInfoPayInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPeriod(period: string): CreateChInstanceInfoPayInfo {
        this['period'] = period;
        return this;
    }
    public withPeriodType(periodType: string): CreateChInstanceInfoPayInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withIsAutoRenew(isAutoRenew: string): CreateChInstanceInfoPayInfo {
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