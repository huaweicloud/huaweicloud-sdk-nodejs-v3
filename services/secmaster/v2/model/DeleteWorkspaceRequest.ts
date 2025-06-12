

export class DeleteWorkspaceRequest {
    private 'content-type'?: string;
    private 'permanent_delete'?: boolean;
    private 'workspace_id'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): DeleteWorkspaceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withPermanentDelete(permanentDelete: boolean): DeleteWorkspaceRequest {
        this['permanent_delete'] = permanentDelete;
        return this;
    }
    public set permanentDelete(permanentDelete: boolean  | undefined) {
        this['permanent_delete'] = permanentDelete;
    }
    public get permanentDelete(): boolean | undefined {
        return this['permanent_delete'];
    }
    public withWorkspaceId(workspaceId: string): DeleteWorkspaceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}