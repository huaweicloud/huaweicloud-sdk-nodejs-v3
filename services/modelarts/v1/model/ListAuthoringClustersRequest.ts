

export class ListAuthoringClustersRequest {
    public type?: string;
    private 'workspace_id'?: string;
    public limit?: number;
    public offset?: number;
    public scope?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ListAuthoringClustersRequest {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListAuthoringClustersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: number): ListAuthoringClustersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAuthoringClustersRequest {
        this['offset'] = offset;
        return this;
    }
    public withScope(scope: string): ListAuthoringClustersRequest {
        this['scope'] = scope;
        return this;
    }
}