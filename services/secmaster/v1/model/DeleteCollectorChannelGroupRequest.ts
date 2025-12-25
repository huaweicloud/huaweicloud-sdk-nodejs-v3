

export class DeleteCollectorChannelGroupRequest {
    private 'workspace_id'?: string;
    private 'group_id'?: string;
    public constructor(workspaceId?: string, groupId?: string) { 
        this['workspace_id'] = workspaceId;
        this['group_id'] = groupId;
    }
    public withWorkspaceId(workspaceId: string): DeleteCollectorChannelGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withGroupId(groupId: string): DeleteCollectorChannelGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}