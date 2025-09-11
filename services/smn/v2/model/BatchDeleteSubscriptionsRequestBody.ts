import { BatchDeleteSubscriptionsRequestItemInfo } from './BatchDeleteSubscriptionsRequestItemInfo';


export class BatchDeleteSubscriptionsRequestBody {
    private 'subscription_urns'?: Array<BatchDeleteSubscriptionsRequestItemInfo>;
    public constructor(subscriptionUrns?: Array<BatchDeleteSubscriptionsRequestItemInfo>) { 
        this['subscription_urns'] = subscriptionUrns;
    }
    public withSubscriptionUrns(subscriptionUrns: Array<BatchDeleteSubscriptionsRequestItemInfo>): BatchDeleteSubscriptionsRequestBody {
        this['subscription_urns'] = subscriptionUrns;
        return this;
    }
    public set subscriptionUrns(subscriptionUrns: Array<BatchDeleteSubscriptionsRequestItemInfo>  | undefined) {
        this['subscription_urns'] = subscriptionUrns;
    }
    public get subscriptionUrns(): Array<BatchDeleteSubscriptionsRequestItemInfo> | undefined {
        return this['subscription_urns'];
    }
}