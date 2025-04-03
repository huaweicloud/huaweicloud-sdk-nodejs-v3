

export class PublicCloudServiceOrder {
    private 'is_auto_pay'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'subscription_num'?: number;
    private 'resource_spec_code'?: string;
    public constructor(periodType?: number, periodNum?: number, subscriptionNum?: number, resourceSpecCode?: string) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['subscription_num'] = subscriptionNum;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withIsAutoPay(isAutoPay: number): PublicCloudServiceOrder {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withPeriodType(periodType: number): PublicCloudServiceOrder {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PublicCloudServiceOrder {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): PublicCloudServiceOrder {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withSubscriptionNum(subscriptionNum: number): PublicCloudServiceOrder {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withResourceSpecCode(resourceSpecCode: string): PublicCloudServiceOrder {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}