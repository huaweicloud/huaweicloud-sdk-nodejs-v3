

export class CountOverviewsRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CountOverviewsRequest {
        this['workspace'] = workspace;
        return this;
    }
}