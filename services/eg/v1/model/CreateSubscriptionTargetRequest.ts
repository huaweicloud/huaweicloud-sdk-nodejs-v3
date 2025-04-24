import { SubscriptionTarget } from './SubscriptionTarget';


export class CreateSubscriptionTargetRequest {
    private 'subscription_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: SubscriptionTarget;
    public constructor(subscriptionId?: string) { 
        this['subscription_id'] = subscriptionId;
    }
    public withSubscriptionId(subscriptionId: string): CreateSubscriptionTargetRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSubscriptionTargetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SubscriptionTarget): CreateSubscriptionTargetRequest {
        this['body'] = body;
        return this;
    }
}