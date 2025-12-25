

export class ListCollectorChannelGroupRequest {
    private 'workspace_id'?: string;
    public name?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorChannelGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withName(name: string): ListCollectorChannelGroupRequest {
        this['name'] = name;
        return this;
    }
}