import { WorkflowExecution } from './WorkflowExecution';


export class CreateWorkflowExecutionRequest {
    private 'workflow_id'?: string;
    public body?: WorkflowExecution;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): CreateWorkflowExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: WorkflowExecution): CreateWorkflowExecutionRequest {
        this['body'] = body;
        return this;
    }
}