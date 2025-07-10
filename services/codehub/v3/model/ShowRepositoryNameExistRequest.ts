

export class ShowRepositoryNameExistRequest {
    private 'project_uuid'?: string;
    private 'repository_name'?: string;
    public constructor(projectUuid?: string, repositoryName?: string) { 
        this['project_uuid'] = projectUuid;
        this['repository_name'] = repositoryName;
    }
    public withProjectUuid(projectUuid: string): ShowRepositoryNameExistRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRepositoryName(repositoryName: string): ShowRepositoryNameExistRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
}