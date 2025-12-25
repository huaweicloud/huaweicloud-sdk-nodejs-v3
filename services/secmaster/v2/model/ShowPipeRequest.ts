

export class ShowPipeRequest {
    private 'workspace_id'?: string;
    private 'pipe_id'?: string;
    public constructor(workspaceId?: string, pipeId?: string) { 
        this['workspace_id'] = workspaceId;
        this['pipe_id'] = pipeId;
    }
    public withWorkspaceId(workspaceId: string): ShowPipeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPipeId(pipeId: string): ShowPipeRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
}