import { Subject } from './Subject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubscriptionResponse extends SdkResponse {
    private 'subscription_id'?: string | undefined;
    public subject?: Subject;
    public callbackurl?: string;
    public channel?: string;
    public constructor() { 
        super();
    }
    public withSubscriptionId(subscriptionId: string): CreateSubscriptionResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
    public withSubject(subject: Subject): CreateSubscriptionResponse {
        this['subject'] = subject;
        return this;
    }
    public withCallbackurl(callbackurl: string): CreateSubscriptionResponse {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withChannel(channel: string): CreateSubscriptionResponse {
        this['channel'] = channel;
        return this;
    }
}