import { PollingPolicySubscriptionDetails } from './PollingPolicySubscriptionDetails';


export class PollingPolicyResponse {
    public order?: number;
    public subscriptions?: Array<PollingPolicySubscriptionDetails>;
    public constructor() { 
    }
    public withOrder(order: number): PollingPolicyResponse {
        this['order'] = order;
        return this;
    }
    public withSubscriptions(subscriptions: Array<PollingPolicySubscriptionDetails>): PollingPolicyResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
}