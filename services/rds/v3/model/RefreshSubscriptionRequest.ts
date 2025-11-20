

export class RefreshSubscriptionRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'subscription_id'?: string;
    public constructor(instanceId?: string, subscriptionId?: string) { 
        this['instance_id'] = instanceId;
        this['subscription_id'] = subscriptionId;
    }
    public withXLanguage(xLanguage: string): RefreshSubscriptionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): RefreshSubscriptionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSubscriptionId(subscriptionId: string): RefreshSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
}