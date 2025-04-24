import { SubscriptionInfo } from './SubscriptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTriggersResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<SubscriptionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTriggersResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListTriggersResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<SubscriptionInfo>): ListTriggersResponse {
        this['items'] = items;
        return this;
    }
}