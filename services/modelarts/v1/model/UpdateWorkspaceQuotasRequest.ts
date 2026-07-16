import { UpdateWorkspaceQuotasReq } from './UpdateWorkspaceQuotasReq';


export class UpdateWorkspaceQuotasRequest {
    private 'workspace_id'?: string;
    public body?: UpdateWorkspaceQuotasReq;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkspaceQuotasRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: UpdateWorkspaceQuotasReq): UpdateWorkspaceQuotasRequest {
        this['body'] = body;
        return this;
    }
}