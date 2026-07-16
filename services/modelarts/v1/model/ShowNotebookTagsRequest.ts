

export class ShowNotebookTagsRequest {
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ShowNotebookTagsRequest {
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