

export class DeleteWorkspacesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public ids?: Array<number>;
    public constructor(workspace?: string, ids?: Array<number>) { 
        this['workspace'] = workspace;
        this['ids'] = ids;
    }
    public withWorkspace(workspace: string): DeleteWorkspacesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): DeleteWorkspacesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): DeleteWorkspacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withIds(ids: Array<number>): DeleteWorkspacesRequest {
        this['ids'] = ids;
        return this;
    }
}