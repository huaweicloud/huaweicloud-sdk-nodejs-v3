import { SubscriptionsFilterPolicy } from './SubscriptionsFilterPolicy';


export class BatchSubscriptionsFilterPolicesRequestBodyPolices {
    private 'subscription_urn'?: string;
    private 'filter_polices'?: Array<SubscriptionsFilterPolicy>;
    public constructor(subscriptionUrn?: string, filterPolices?: Array<SubscriptionsFilterPolicy>) { 
        this['subscription_urn'] = subscriptionUrn;
        this['filter_polices'] = filterPolices;
    }
    public withSubscriptionUrn(subscriptionUrn: string): BatchSubscriptionsFilterPolicesRequestBodyPolices {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
    public withFilterPolices(filterPolices: Array<SubscriptionsFilterPolicy>): BatchSubscriptionsFilterPolicesRequestBodyPolices {
        this['filter_polices'] = filterPolices;
        return this;
    }
    public set filterPolices(filterPolices: Array<SubscriptionsFilterPolicy>  | undefined) {
        this['filter_polices'] = filterPolices;
    }
    public get filterPolices(): Array<SubscriptionsFilterPolicy> | undefined {
        return this['filter_polices'];
    }
}