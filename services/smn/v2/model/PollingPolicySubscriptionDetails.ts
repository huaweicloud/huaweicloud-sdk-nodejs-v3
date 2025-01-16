

export class PollingPolicySubscriptionDetails {
    private 'subscription_urn'?: string;
    public endpoint?: string;
    public remark?: string;
    public status?: number;
    public constructor(subscriptionUrn?: string, endpoint?: string) { 
        this['subscription_urn'] = subscriptionUrn;
        this['endpoint'] = endpoint;
    }
    public withSubscriptionUrn(subscriptionUrn: string): PollingPolicySubscriptionDetails {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
    public withEndpoint(endpoint: string): PollingPolicySubscriptionDetails {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRemark(remark: string): PollingPolicySubscriptionDetails {
        this['remark'] = remark;
        return this;
    }
    public withStatus(status: number): PollingPolicySubscriptionDetails {
        this['status'] = status;
        return this;
    }
}