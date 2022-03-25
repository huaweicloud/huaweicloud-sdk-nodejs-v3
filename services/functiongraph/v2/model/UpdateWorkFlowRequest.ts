import { UpdateWorkflowRequestBody } from './UpdateWorkflowRequestBody';


export class UpdateWorkFlowRequest {
    private 'workflow_id': string | undefined;
    public body?: UpdateWorkflowRequestBody;
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
    public withBody(body: UpdateWorkflowRequestBody): UpdateWorkFlowRequest {
        this['body'] = body;
        return this;
    }
}