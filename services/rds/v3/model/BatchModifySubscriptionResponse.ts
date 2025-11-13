import { BatchOperateResponseInfo } from './BatchOperateResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchModifySubscriptionResponse extends SdkResponse {
    public subscriptions?: Array<BatchOperateResponseInfo>;
    public constructor() { 
        super();
    }
    public withSubscriptions(subscriptions: Array<BatchOperateResponseInfo>): BatchModifySubscriptionResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
}