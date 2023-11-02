

export class ShowWorkSpaceRequest {
    private 'instance_id'?: string;
    private 'workspace_id'?: string;
    public constructor(instanceId?: string, workspaceId?: string) { 
        this['instance_id'] = instanceId;
        this['workspace_id'] = workspaceId;
    }
    public withInstanceId(instanceId: string): ShowWorkSpaceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowWorkSpaceRequest {
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