

export class ShowWorkspaceDetailByIdRequest {
    public workspace?: string;
    private 'model_id'?: string;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): ShowWorkspaceDetailByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withModelId(modelId: string): ShowWorkspaceDetailByIdRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}