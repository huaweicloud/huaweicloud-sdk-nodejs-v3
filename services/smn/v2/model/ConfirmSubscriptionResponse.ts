
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmSubscriptionResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'subscription_urn'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ConfirmSubscriptionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubscriptionUrn(subscriptionUrn: string): ConfirmSubscriptionResponse {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
}