import { Subscription } from './Subscription';


export class UpdateWorkflowSubscriptionRequest {
    private 'subscription_id'?: string;
    private 'workflow_id'?: string;
    public body?: Subscription;
    public constructor(subscriptionId?: string, workflowId?: string) { 
        this['subscription_id'] = subscriptionId;
        this['workflow_id'] = workflowId;
    }
    public withSubscriptionId(subscriptionId: string): UpdateWorkflowSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withWorkflowId(workflowId: string): UpdateWorkflowSubscriptionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: Subscription): UpdateWorkflowSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}