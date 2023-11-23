import { CreatePipeRequestBody } from './CreatePipeRequestBody';


export class CreatePipeRequest {
    private 'workspace_id'?: string;
    public body?: CreatePipeRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreatePipeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreatePipeRequestBody): CreatePipeRequest {
        this['body'] = body;
        return this;
    }
}