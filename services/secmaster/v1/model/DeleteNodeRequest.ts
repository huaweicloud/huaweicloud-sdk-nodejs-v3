import { DeleteNodeRequestBody } from './DeleteNodeRequestBody';


export class DeleteNodeRequest {
    private 'workspace_id'?: string;
    public body?: DeleteNodeRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): DeleteNodeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: DeleteNodeRequestBody): DeleteNodeRequest {
        this['body'] = body;
        return this;
    }
}