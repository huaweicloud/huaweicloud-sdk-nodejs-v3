

export class ShowDetailOfSubscriptionTargetRequest {
    private 'subscription_id'?: string;
    private 'target_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(subscriptionId?: string, targetId?: string) { 
        this['subscription_id'] = subscriptionId;
        this['target_id'] = targetId;
    }
    public withSubscriptionId(subscriptionId: string): ShowDetailOfSubscriptionTargetRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withTargetId(targetId: string): ShowDetailOfSubscriptionTargetRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDetailOfSubscriptionTargetRequest {
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