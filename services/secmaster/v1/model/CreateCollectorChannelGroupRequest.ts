import { GroupDto } from './GroupDto';


export class CreateCollectorChannelGroupRequest {
    private 'workspace_id'?: string;
    public body?: GroupDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCollectorChannelGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: GroupDto): CreateCollectorChannelGroupRequest {
        this['body'] = body;
        return this;
    }
}