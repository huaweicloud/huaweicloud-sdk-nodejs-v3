import { ApigWorkspaceUserDto } from './ApigWorkspaceUserDto';


export class AddWorkSpaceUsersRequest {
    private 'workspace_id'?: string;
    public body?: ApigWorkspaceUserDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): AddWorkSpaceUsersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ApigWorkspaceUserDto): AddWorkSpaceUsersRequest {
        this['body'] = body;
        return this;
    }
}