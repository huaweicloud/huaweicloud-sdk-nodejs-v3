

export class ListPoolsRequest {
    public workspaceId?: string;
    public labelSelector?: string;
    public status?: string;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ListPoolsRequest {
        this['workspaceId'] = workspaceId;
        return this;
    }
    public withLabelSelector(labelSelector: string): ListPoolsRequest {
        this['labelSelector'] = labelSelector;
        return this;
    }
    public withStatus(status: string): ListPoolsRequest {
        this['status'] = status;
        return this;
    }
}