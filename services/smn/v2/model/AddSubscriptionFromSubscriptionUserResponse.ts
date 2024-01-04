import { AddSubscriptionFromSubscriptionUserResponseItem } from './AddSubscriptionFromSubscriptionUserResponseItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSubscriptionFromSubscriptionUserResponse extends SdkResponse {
    private 'subscriptions_result'?: Array<AddSubscriptionFromSubscriptionUserResponseItem>;
    public constructor() { 
        super();
    }
    public withSubscriptionsResult(subscriptionsResult: Array<AddSubscriptionFromSubscriptionUserResponseItem>): AddSubscriptionFromSubscriptionUserResponse {
        this['subscriptions_result'] = subscriptionsResult;
        return this;
    }
    public set subscriptionsResult(subscriptionsResult: Array<AddSubscriptionFromSubscriptionUserResponseItem>  | undefined) {
        this['subscriptions_result'] = subscriptionsResult;
    }
    public get subscriptionsResult(): Array<AddSubscriptionFromSubscriptionUserResponseItem> | undefined {
        return this['subscriptions_result'];
    }
}