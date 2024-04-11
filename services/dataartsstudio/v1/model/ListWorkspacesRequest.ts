

export class ListWorkspacesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'workspace_type'?: ListWorkspacesRequestWorkspaceTypeEnum | string;
    public limit?: number;
    public offset?: number;
    private 'dw_type'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListWorkspacesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListWorkspacesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListWorkspacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceType(workspaceType: ListWorkspacesRequestWorkspaceTypeEnum | string): ListWorkspacesRequest {
        this['workspace_type'] = workspaceType;
        return this;
    }
    public set workspaceType(workspaceType: ListWorkspacesRequestWorkspaceTypeEnum | string  | undefined) {
        this['workspace_type'] = workspaceType;
    }
    public get workspaceType(): ListWorkspacesRequestWorkspaceTypeEnum | string | undefined {
        return this['workspace_type'];
    }
    public withLimit(limit: number): ListWorkspacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkspacesRequest {
        this['offset'] = offset;
        return this;
    }
    public withDwType(dwType: string): ListWorkspacesRequest {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkspacesRequestWorkspaceTypeEnum {
    THIRD_NF = 'THIRD_NF',
    DIMENSION = 'DIMENSION'
}
