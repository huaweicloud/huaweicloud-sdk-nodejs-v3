import { Index } from './Index';


export class UpdatePipeIndexRequest {
    private 'workspace_id'?: string;
    private 'pipe_id'?: string;
    public body?: Index;
    public constructor(workspaceId?: string, pipeId?: string) { 
        this['workspace_id'] = workspaceId;
        this['pipe_id'] = pipeId;
    }
    public withWorkspaceId(workspaceId: string): UpdatePipeIndexRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPipeId(pipeId: string): UpdatePipeIndexRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withBody(body: Index): UpdatePipeIndexRequest {
        this['body'] = body;
        return this;
    }
}