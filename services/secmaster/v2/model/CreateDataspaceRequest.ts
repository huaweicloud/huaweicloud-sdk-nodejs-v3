import { CreateDataspaceRequestBody } from './CreateDataspaceRequestBody';


export class CreateDataspaceRequest {
    private 'workspace_id'?: string;
    public body?: CreateDataspaceRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateDataspaceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateDataspaceRequestBody): CreateDataspaceRequest {
        this['body'] = body;
        return this;
    }
}