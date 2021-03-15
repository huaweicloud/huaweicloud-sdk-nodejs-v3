import { Subject } from './Subject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscriptionResponse extends SdkResponse {
    private 'subscription_id'?: string | undefined;
    public subject?: Subject;
    public callbackurl?: string;
    public channel?: string;
    public constructor() { 
        super();
    }
    public withSubscriptionId(subscriptionId: string): ShowSubscriptionResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
    public withSubject(subject: Subject): ShowSubscriptionResponse {
        this['subject'] = subject;
        return this;
    }
    public withCallbackurl(callbackurl: string): ShowSubscriptionResponse {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withChannel(channel: string): ShowSubscriptionResponse {
        this['channel'] = channel;
        return this;
    }
}