

export class UnsubscribeSubscriptionRequest {
    private 'subscription_urn'?: string;
    public constructor(subscriptionUrn?: string) { 
        this['subscription_urn'] = subscriptionUrn;
    }
    public withSubscriptionUrn(subscriptionUrn: string): UnsubscribeSubscriptionRequest {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
}