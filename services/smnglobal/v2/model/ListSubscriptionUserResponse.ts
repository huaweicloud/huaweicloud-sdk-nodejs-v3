import { ListSubscriptionUserResponseItemInfo } from './ListSubscriptionUserResponseItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionUserResponse extends SdkResponse {
    private 'request_id'?: string;
    public count?: number;
    private 'subscription_users'?: Array<ListSubscriptionUserResponseItemInfo>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSubscriptionUserResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCount(count: number): ListSubscriptionUserResponse {
        this['count'] = count;
        return this;
    }
    public withSubscriptionUsers(subscriptionUsers: Array<ListSubscriptionUserResponseItemInfo>): ListSubscriptionUserResponse {
        this['subscription_users'] = subscriptionUsers;
        return this;
    }
    public set subscriptionUsers(subscriptionUsers: Array<ListSubscriptionUserResponseItemInfo>  | undefined) {
        this['subscription_users'] = subscriptionUsers;
    }
    public get subscriptionUsers(): Array<ListSubscriptionUserResponseItemInfo> | undefined {
        return this['subscription_users'];
    }
}