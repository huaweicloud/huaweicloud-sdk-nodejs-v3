

export class DeleteWorkflowSubscriptionRequest {
    private 'workflow_id'?: string;
    private 'subscription_id'?: string;
    public constructor(workflowId?: string, subscriptionId?: string) { 
        this['workflow_id'] = workflowId;
        this['subscription_id'] = subscriptionId;
    }
    public withWorkflowId(workflowId: string): DeleteWorkflowSubscriptionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withSubscriptionId(subscriptionId: string): DeleteWorkflowSubscriptionRequest {
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