

export class ListPlaybookApprovesRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'resource_id'?: string;
    private 'approve_type'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListPlaybookApprovesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybookApprovesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withResourceId(resourceId: string): ListPlaybookApprovesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withApproveType(approveType: string): ListPlaybookApprovesRequest {
        this['approve_type'] = approveType;
        return this;
    }
    public set approveType(approveType: string  | undefined) {
        this['approve_type'] = approveType;
    }
    public get approveType(): string | undefined {
        return this['approve_type'];
    }
}