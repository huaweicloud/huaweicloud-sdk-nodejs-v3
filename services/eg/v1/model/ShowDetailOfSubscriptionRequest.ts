

export class ShowDetailOfSubscriptionRequest {
    private 'subscription_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(subscriptionId?: string) { 
        this['subscription_id'] = subscriptionId;
    }
    public withSubscriptionId(subscriptionId: string): ShowDetailOfSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDetailOfSubscriptionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}