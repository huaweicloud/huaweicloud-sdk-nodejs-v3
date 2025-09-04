import { SubscriptionTask } from './SubscriptionTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionTasksResponse extends SdkResponse {
    public total?: number;
    public data?: Array<SubscriptionTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSubscriptionTasksResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<SubscriptionTask>): ListSubscriptionTasksResponse {
        this['data'] = data;
        return this;
    }
}