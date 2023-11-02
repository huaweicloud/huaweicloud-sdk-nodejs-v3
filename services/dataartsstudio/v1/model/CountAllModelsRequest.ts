

export class CountAllModelsRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CountAllModelsRequest {
        this['workspace'] = workspace;
        return this;
    }
}