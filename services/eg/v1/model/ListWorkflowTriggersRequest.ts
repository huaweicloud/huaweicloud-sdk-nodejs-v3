

export class ListWorkflowTriggersRequest {
    private 'workflow_id'?: string;
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowTriggersRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withOffset(offset: number): ListWorkflowTriggersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkflowTriggersRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListWorkflowTriggersRequest {
        this['sort'] = sort;
        return this;
    }
}