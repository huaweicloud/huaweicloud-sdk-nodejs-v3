

export class UnlockRepositoryRequest {
    private 'project_id'?: string;
    private 'repository_id'?: number;
    public constructor(projectId?: string, repositoryId?: number) { 
        this['project_id'] = projectId;
        this['repository_id'] = repositoryId;
    }
    public withProjectId(projectId: string): UnlockRepositoryRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRepositoryId(repositoryId: number): UnlockRepositoryRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
}