

export class RollbackApprovalRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public ids?: string;
    public constructor(workspace?: string, ids?: string) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): RollbackApprovalRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): RollbackApprovalRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): RollbackApprovalRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withIds(ids: string): RollbackApprovalRequest {
        this['ids'] = ids;
        return this;
    }
}