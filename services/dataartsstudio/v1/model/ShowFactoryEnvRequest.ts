

export class ShowFactoryEnvRequest {
    public workspace?: string;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ShowFactoryEnvRequest {
        this['workspace'] = workspace;
        return this;
    }
}