

export class ListWorkflowStepExecutionRequest {
    private 'workflow_id'?: string;
    public limit?: number;
    public offset?: number;
    public order?: ListWorkflowStepExecutionRequestOrderEnum | string;
    private 'sort_by'?: string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowStepExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withLimit(limit: number): ListWorkflowStepExecutionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkflowStepExecutionRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: ListWorkflowStepExecutionRequestOrderEnum | string): ListWorkflowStepExecutionRequest {
        this['order'] = order;
        return this;
    }
    public withSortBy(sortBy: string): ListWorkflowStepExecutionRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowStepExecutionRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
