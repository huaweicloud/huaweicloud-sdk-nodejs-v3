

export class DeleteSubscriptionRequestBody {
    private 'subscription_ids'?: Array<string>;
    private 'clean_subscription'?: boolean;
    public constructor(subscriptionIds?: Array<string>) { 
        this['subscription_ids'] = subscriptionIds;
    }
    public withSubscriptionIds(subscriptionIds: Array<string>): DeleteSubscriptionRequestBody {
        this['subscription_ids'] = subscriptionIds;
        return this;
    }
    public set subscriptionIds(subscriptionIds: Array<string>  | undefined) {
        this['subscription_ids'] = subscriptionIds;
    }
    public get subscriptionIds(): Array<string> | undefined {
        return this['subscription_ids'];
    }
    public withCleanSubscription(cleanSubscription: boolean): DeleteSubscriptionRequestBody {
        this['clean_subscription'] = cleanSubscription;
        return this;
    }
    public set cleanSubscription(cleanSubscription: boolean  | undefined) {
        this['clean_subscription'] = cleanSubscription;
    }
    public get cleanSubscription(): boolean | undefined {
        return this['clean_subscription'];
    }
}