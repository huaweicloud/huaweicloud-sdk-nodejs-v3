

export class BatchDeleteSubscriptionsFilterPolicesRequestBody {
    private 'subscription_urns'?: Array<string>;
    public constructor(subscriptionUrns?: Array<string>) { 
        this['subscription_urns'] = subscriptionUrns;
    }
    public withSubscriptionUrns(subscriptionUrns: Array<string>): BatchDeleteSubscriptionsFilterPolicesRequestBody {
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