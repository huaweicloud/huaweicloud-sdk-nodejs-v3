import { SubscriptionSource } from './SubscriptionSource';


export class UpdateSubscriptionSourceRequest {
    private 'subscription_id'?: string;
    private 'source_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: SubscriptionSource;
    public constructor(subscriptionId?: string, sourceId?: string) { 
        this['subscription_id'] = subscriptionId;
        this['source_id'] = sourceId;
    }
    public withSubscriptionId(subscriptionId: string): UpdateSubscriptionSourceRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withSourceId(sourceId: string): UpdateSubscriptionSourceRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSubscriptionSourceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SubscriptionSource): UpdateSubscriptionSourceRequest {
        this['body'] = body;
        return this;
    }
}