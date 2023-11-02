import { ApigWorkspaceUserDto } from './ApigWorkspaceUserDto';


export class UpdateWorkSpaceUserOrGroupRequest {
    private 'workspace_id'?: string;
    private 'user_id'?: string;
    public body?: ApigWorkspaceUserDto;
    public constructor(workspaceId?: string, userId?: string) { 
        this['workspace_id'] = workspaceId;
        this['user_id'] = userId;
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkSpaceUserOrGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withUserId(userId: string): UpdateWorkSpaceUserOrGroupRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: ApigWorkspaceUserDto): UpdateWorkSpaceUserOrGroupRequest {
        this['body'] = body;
        return this;
    }
}