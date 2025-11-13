import { ListSubscriptionInfo } from './ListSubscriptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionsResponse extends SdkResponse {
    public subscriptions?: Array<ListSubscriptionInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSubscriptions(subscriptions: Array<ListSubscriptionInfo>): ListSubscriptionsResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withTotalCount(totalCount: number): ListSubscriptionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}