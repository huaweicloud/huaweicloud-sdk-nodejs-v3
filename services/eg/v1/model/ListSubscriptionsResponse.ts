import { SubscriptionInfo } from './SubscriptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<SubscriptionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSubscriptionsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListSubscriptionsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<SubscriptionInfo>): ListSubscriptionsResponse {
        this['items'] = items;
        return this;
    }
}