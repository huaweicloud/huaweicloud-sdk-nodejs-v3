

export class ShowLastHistoryRequest {
    private 'project_id': string | undefined;
    private 'repository_name': string | undefined;
    public constructor(projectId?: any, repositoryName?: any) { 
        this['project_id'] = projectId;
        this['repository_name'] = repositoryName;
    }
    public withProjectId(projectId: string): ShowLastHistoryRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRepositoryName(repositoryName: string): ShowLastHistoryRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName() {
        return this['repository_name'];
    }
}