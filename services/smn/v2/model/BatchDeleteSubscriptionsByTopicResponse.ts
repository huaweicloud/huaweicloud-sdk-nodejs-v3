import { BatchDeleteSubscriptionsResponseItemInfo } from './BatchDeleteSubscriptionsResponseItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteSubscriptionsByTopicResponse extends SdkResponse {
    private 'subscriptions_result'?: Array<BatchDeleteSubscriptionsResponseItemInfo>;
    public constructor() { 
        super();
    }
    public withSubscriptionsResult(subscriptionsResult: Array<BatchDeleteSubscriptionsResponseItemInfo>): BatchDeleteSubscriptionsByTopicResponse {
        this['subscriptions_result'] = subscriptionsResult;
        return this;
    }
    public set subscriptionsResult(subscriptionsResult: Array<BatchDeleteSubscriptionsResponseItemInfo>  | undefined) {
        this['subscriptions_result'] = subscriptionsResult;
    }
    public get subscriptionsResult(): Array<BatchDeleteSubscriptionsResponseItemInfo> | undefined {
        return this['subscriptions_result'];
    }
}