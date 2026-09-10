

export class BatchDeleteWorkspacesRequestBody {
    private 'workspace_ids'?: Array<string>;
    public constructor(workspaceIds?: Array<string>) { 
        this['workspace_ids'] = workspaceIds;
    }
    public withWorkspaceIds(workspaceIds: Array<string>): BatchDeleteWorkspacesRequestBody {
        this['workspace_ids'] = workspaceIds;
        return this;
    }
    public set workspaceIds(workspaceIds: Array<string>  | undefined) {
        this['workspace_ids'] = workspaceIds;
    }
    public get workspaceIds(): Array<string> | undefined {
        return this['workspace_ids'];
    }
}