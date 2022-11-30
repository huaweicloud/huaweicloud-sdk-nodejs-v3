import { QueryRunListParam } from './QueryRunListParam';


export class ShowWorkflowExecutionForPageRequest {
    private 'workflow_id': string | undefined;
    public body?: QueryRunListParam;
    public constructor(workflowId?: any) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionForPageRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withBody(body: QueryRunListParam): ShowWorkflowExecutionForPageRequest {
        this['body'] = body;
        return this;
    }
}