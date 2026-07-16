import { WorkflowServicePackage } from './WorkflowServicePackage';


export class CreateWorkflowPurchasePoolRequest {
    private 'workflow_id'?: string;
    public body?: WorkflowServicePackage;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): CreateWorkflowPurchasePoolRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: WorkflowServicePackage): CreateWorkflowPurchasePoolRequest {
        this['body'] = body;
        return this;
    }
}