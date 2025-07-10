

export class ProjectRepository {
    public projectUuid?: string;
    public repositoryUuid?: string;
    public constructor() { 
    }
    public withProjectUuid(projectUuid: string): ProjectRepository {
        this['projectUuid'] = projectUuid;
        return this;
    }
    public withRepositoryUuid(repositoryUuid: string): ProjectRepository {
        this['repositoryUuid'] = repositoryUuid;
        return this;
    }
}