import { Subject } from './Subject';


export class SubscriptionItem {
    private 'subscription_id'?: string | undefined;
    public subject?: Subject;
    public callbackurl?: string;
    public channel?: string;
    public constructor() { 
    }
    public withSubscriptionId(subscriptionId: string): SubscriptionItem {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
    public withSubject(subject: Subject): SubscriptionItem {
        this['subject'] = subject;
        return this;
    }
    public withCallbackurl(callbackurl: string): SubscriptionItem {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withChannel(channel: string): SubscriptionItem {
        this['channel'] = channel;
        return this;
    }
}