
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubscriptionResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'subscription_urn'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateSubscriptionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSubscriptionUrn(subscriptionUrn: string): UpdateSubscriptionResponse {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn() {
        return this['subscription_urn'];
    }
}