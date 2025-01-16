

export class PollingPolicyRequest {
    public order?: number;
    private 'subscription_urns'?: Array<string>;
    public constructor(order?: number, subscriptionUrns?: Array<string>) { 
        this['order'] = order;
        this['subscription_urns'] = subscriptionUrns;
    }
    public withOrder(order: number): PollingPolicyRequest {
        this['order'] = order;
        return this;
    }
    public withSubscriptionUrns(subscriptionUrns: Array<string>): PollingPolicyRequest {
        this['subscription_urns'] = subscriptionUrns;
        return this;
    }
    public set subscriptionUrns(subscriptionUrns: Array<string>  | undefined) {
        this['subscription_urns'] = subscriptionUrns;
    }
    public get subscriptionUrns(): Array<string> | undefined {
        return this['subscription_urns'];
    }
}