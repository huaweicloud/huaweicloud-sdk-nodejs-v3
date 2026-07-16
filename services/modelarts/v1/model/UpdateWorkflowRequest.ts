import { WorkflowUpdate } from './WorkflowUpdate';


export class UpdateWorkflowRequest {
    private 'workflow_id'?: string;
    public body?: WorkflowUpdate;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): UpdateWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: WorkflowUpdate): UpdateWorkflowRequest {
        this['body'] = body;
        return this;
    }
}