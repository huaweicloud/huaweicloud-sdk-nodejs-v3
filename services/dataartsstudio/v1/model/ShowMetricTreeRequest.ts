

export class ShowMetricTreeRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowMetricTreeRequest {
        this['workspace'] = workspace;
        return this;
    }
}