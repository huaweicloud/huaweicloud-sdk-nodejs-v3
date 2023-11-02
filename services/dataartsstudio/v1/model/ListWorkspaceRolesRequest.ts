

export class ListWorkspaceRolesRequest {
    private 'instance_id'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListWorkspaceRolesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: string): ListWorkspaceRolesRequest {
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