

export class ShowPoolStatisticsRequest {
    public workspaceId?: string;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ShowPoolStatisticsRequest {
        this['workspaceId'] = workspaceId;
        return this;
    }
}