import { WorkflowCreateBody } from './WorkflowCreateBody';


export class UpdateWorkFlowRequest {
    private 'workflow_id': string | undefined;
    public body?: WorkflowCreateBody;
    public constructor(workflowId?: any) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): UpdateWorkFlowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withBody(body: WorkflowCreateBody): UpdateWorkFlowRequest {
        this['body'] = body;
        return this;
    }
}