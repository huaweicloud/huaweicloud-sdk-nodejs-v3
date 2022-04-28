import { StartSyncWorkflowExecutionRequestBody } from './StartSyncWorkflowExecutionRequestBody';


export class StartSyncWorkflowExecutionRequest {
    private 'workflow_id': string | undefined;
    public body?: StartSyncWorkflowExecutionRequestBody;
    public constructor(workflowId?: any) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): StartSyncWorkflowExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withBody(body: StartSyncWorkflowExecutionRequestBody): StartSyncWorkflowExecutionRequest {
        this['body'] = body;
        return this;
    }
}