

export class ListWorkflowExecutionsRequest {
    private 'workflow_id'?: string;
    private 'workspace_id'?: string;
    public limit?: string;
    private 'sort_by'?: string;
    public offset?: string;
    public labels?: string;
    public status?: string;
    private 'scene_id'?: string;
    public order?: ListWorkflowExecutionsRequestOrderEnum | string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowExecutionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkspaceId(workspaceId: string): ListWorkflowExecutionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: string): ListWorkflowExecutionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: string): ListWorkflowExecutionsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOffset(offset: string): ListWorkflowExecutionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLabels(labels: string): ListWorkflowExecutionsRequest {
        this['labels'] = labels;
        return this;
    }
    public withStatus(status: string): ListWorkflowExecutionsRequest {
        this['status'] = status;
        return this;
    }
    public withSceneId(sceneId: string): ListWorkflowExecutionsRequest {
        this['scene_id'] = sceneId;
        return this;
    }
    public set sceneId(sceneId: string  | undefined) {
        this['scene_id'] = sceneId;
    }
    public get sceneId(): string | undefined {
        return this['scene_id'];
    }
    public withOrder(order: ListWorkflowExecutionsRequestOrderEnum | string): ListWorkflowExecutionsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowExecutionsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
