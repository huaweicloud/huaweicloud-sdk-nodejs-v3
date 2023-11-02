import { ApigDelUserParams } from './ApigDelUserParams';


export class DeleteWorkspaceusersRequest {
    private 'workspace_id'?: string;
    public body?: ApigDelUserParams;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): DeleteWorkspaceusersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ApigDelUserParams): DeleteWorkspaceusersRequest {
        this['body'] = body;
        return this;
    }
}