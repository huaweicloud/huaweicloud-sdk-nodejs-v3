import { GroupDto } from './GroupDto';


export class UpdateCollectorChannelGroupRequest {
    private 'workspace_id'?: string;
    private 'group_id'?: string;
    public body?: GroupDto;
    public constructor(workspaceId?: string, groupId?: string) { 
        this['workspace_id'] = workspaceId;
        this['group_id'] = groupId;
    }
    public withWorkspaceId(workspaceId: string): UpdateCollectorChannelGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withGroupId(groupId: string): UpdateCollectorChannelGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: GroupDto): UpdateCollectorChannelGroupRequest {
        this['body'] = body;
        return this;
    }
}