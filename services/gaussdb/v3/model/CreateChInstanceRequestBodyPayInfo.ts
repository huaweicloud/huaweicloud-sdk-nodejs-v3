

export class CreateChInstanceRequestBodyPayInfo {
    private 'pay_model'?: string;
    private 'order_id'?: string;
    public period?: number;
    private 'period_type'?: number;
    private 'is_auto_renew'?: number;
    public constructor() { 
    }
    public withPayModel(payModel: string): CreateChInstanceRequestBodyPayInfo {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): CreateChInstanceRequestBodyPayInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPeriod(period: number): CreateChInstanceRequestBodyPayInfo {
        this['period'] = period;
        return this;
    }
    public withPeriodType(periodType: number): CreateChInstanceRequestBodyPayInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateChInstanceRequestBodyPayInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
}