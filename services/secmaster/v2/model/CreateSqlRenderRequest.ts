import { CreateSqlRenderRequestBody } from './CreateSqlRenderRequestBody';


export class CreateSqlRenderRequest {
    private 'workspace_id'?: string;
    public body?: CreateSqlRenderRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateSqlRenderRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateSqlRenderRequestBody): CreateSqlRenderRequest {
        this['body'] = body;
        return this;
    }
}