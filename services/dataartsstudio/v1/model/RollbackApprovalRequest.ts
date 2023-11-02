

export class RollbackApprovalRequest {
    public workspace?: string;
    public ids?: string;
    public constructor(workspace?: string, ids?: string) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): RollbackApprovalRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withIds(ids: string): RollbackApprovalRequest {
        this['ids'] = ids;
        return this;
    }
}