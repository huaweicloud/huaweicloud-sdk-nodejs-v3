

export class CountTableModelsRequest {
    public workspace?: string;
    private 'model_id'?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CountTableModelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withModelId(modelId: number): CountTableModelsRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: number  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): number | undefined {
        return this['model_id'];
    }
}