import { ListSubscriptionsItem } from './ListSubscriptionsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'subscription_count'?: number;
    public subscriptions?: Array<ListSubscriptionsItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSubscriptionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubscriptionCount(subscriptionCount: number): ListSubscriptionsResponse {
        this['subscription_count'] = subscriptionCount;
        return this;
    }
    public set subscriptionCount(subscriptionCount: number  | undefined) {
        this['subscription_count'] = subscriptionCount;
    }
    public get subscriptionCount(): number | undefined {
        return this['subscription_count'];
    }
    public withSubscriptions(subscriptions: Array<ListSubscriptionsItem>): ListSubscriptionsResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
}