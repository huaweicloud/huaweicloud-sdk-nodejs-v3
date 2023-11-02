

export class DeleteWorkspacesRequest {
    public workspace?: string;
    public ids?: Array<number>;
    public constructor(workspace?: string, ids?: Array<number>) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): DeleteWorkspacesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withIds(ids: Array<number>): DeleteWorkspacesRequest {
        this['ids'] = ids;
        return this;
    }
}