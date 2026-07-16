import { Subscription } from './Subscription';


export class CreateWorkflowSubscriptionsRequest {
    private 'workflow_id'?: string;
    public body?: Subscription;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): CreateWorkflowSubscriptionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: Subscription): CreateWorkflowSubscriptionsRequest {
        this['body'] = body;
        return this;
    }
}