import { SubscriptionInfo } from './SubscriptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowTriggersResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<SubscriptionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowTriggersResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListWorkflowTriggersResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<SubscriptionInfo>): ListWorkflowTriggersResponse {
        this['items'] = items;
        return this;
    }
}