

export class PackageProductRequestDetail {
    private 'resource_spec_code'?: string;
    private 'subscription_num'?: number;
    public constructor(resourceSpecCode?: string, subscriptionNum?: number) { 
        this['resource_spec_code'] = resourceSpecCode;
        this['subscription_num'] = subscriptionNum;
    }
    public withResourceSpecCode(resourceSpecCode: string): PackageProductRequestDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withSubscriptionNum(subscriptionNum: number): PackageProductRequestDetail {
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