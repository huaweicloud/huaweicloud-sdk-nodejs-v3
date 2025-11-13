

export class Subscription4PublicationInfo {
    private 'subscription_instance_name'?: string;
    private 'subscription_instance_ip'?: string;
    private 'subscription_instance_id'?: string;
    public constructor() { 
    }
    public withSubscriptionInstanceName(subscriptionInstanceName: string): Subscription4PublicationInfo {
        this['subscription_instance_name'] = subscriptionInstanceName;
        return this;
    }
    public set subscriptionInstanceName(subscriptionInstanceName: string  | undefined) {
        this['subscription_instance_name'] = subscriptionInstanceName;
    }
    public get subscriptionInstanceName(): string | undefined {
        return this['subscription_instance_name'];
    }
    public withSubscriptionInstanceIp(subscriptionInstanceIp: string): Subscription4PublicationInfo {
        this['subscription_instance_ip'] = subscriptionInstanceIp;
        return this;
    }
    public set subscriptionInstanceIp(subscriptionInstanceIp: string  | undefined) {
        this['subscription_instance_ip'] = subscriptionInstanceIp;
    }
    public get subscriptionInstanceIp(): string | undefined {
        return this['subscription_instance_ip'];
    }
    public withSubscriptionInstanceId(subscriptionInstanceId: string): Subscription4PublicationInfo {
        this['subscription_instance_id'] = subscriptionInstanceId;
        return this;
    }
    public set subscriptionInstanceId(subscriptionInstanceId: string  | undefined) {
        this['subscription_instance_id'] = subscriptionInstanceId;
    }
    public get subscriptionInstanceId(): string | undefined {
        return this['subscription_instance_id'];
    }
}