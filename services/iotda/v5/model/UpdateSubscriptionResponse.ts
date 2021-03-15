import { Subject } from './Subject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubscriptionResponse extends SdkResponse {
    private 'subscription_id'?: string | undefined;
    public subject?: Subject;
    public callbackurl?: string;
    public channel?: string;
    public constructor() { 
        super();
    }
    public withSubscriptionId(subscriptionId: string): UpdateSubscriptionResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
    public withSubject(subject: Subject): UpdateSubscriptionResponse {
        this['subject'] = subject;
        return this;
    }
    public withCallbackurl(callbackurl: string): UpdateSubscriptionResponse {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withChannel(channel: string): UpdateSubscriptionResponse {
        this['channel'] = channel;
        return this;
    }
}