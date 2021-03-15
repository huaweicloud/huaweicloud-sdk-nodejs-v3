

export class DeleteSubscriptionRequest {
    private 'Instance-Id'?: string | undefined;
    private 'subscription_id': string | undefined;
    public constructor(subscriptionId: any) { 
        this['subscription_id'] = subscriptionId;
    }
    public withInstanceId(instanceId: string): DeleteSubscriptionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withSubscriptionId(subscriptionId: string): DeleteSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
}