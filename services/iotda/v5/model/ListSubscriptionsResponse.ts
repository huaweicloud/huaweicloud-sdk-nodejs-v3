import { SubscriptionItem } from './SubscriptionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionsResponse extends SdkResponse {
    public subscriptions?: Array<SubscriptionItem>;
    public count?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withSubscriptions(subscriptions: Array<SubscriptionItem>): ListSubscriptionsResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withCount(count: number): ListSubscriptionsResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListSubscriptionsResponse {
        this['marker'] = marker;
        return this;
    }
}