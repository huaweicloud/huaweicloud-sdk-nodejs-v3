import { UpdateWorkspaceReq } from './UpdateWorkspaceReq';


export class UpdateWorkspaceRequest {
    private 'workspace_id'?: string;
    public body?: UpdateWorkspaceReq;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkspaceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: UpdateWorkspaceReq): UpdateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}