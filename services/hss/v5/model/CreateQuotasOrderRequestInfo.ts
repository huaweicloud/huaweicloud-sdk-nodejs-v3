

export class CreateQuotasOrderRequestInfo {
    private 'resource_spec_code'?: string;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    private 'subscription_num'?: number;
    public constructor(resourceSpecCode?: string, periodType?: number, periodNum?: number, subscriptionNum?: number) { 
        this['resource_spec_code'] = resourceSpecCode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['subscription_num'] = subscriptionNum;
    }
    public withResourceSpecCode(resourceSpecCode: string): CreateQuotasOrderRequestInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withPeriodType(periodType: number): CreateQuotasOrderRequestInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateQuotasOrderRequestInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): CreateQuotasOrderRequestInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): CreateQuotasOrderRequestInfo {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateQuotasOrderRequestInfo {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
}