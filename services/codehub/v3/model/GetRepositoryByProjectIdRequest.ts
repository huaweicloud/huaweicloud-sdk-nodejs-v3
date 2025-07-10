

export class GetRepositoryByProjectIdRequest {
    private 'repository_uuid'?: string;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withRepositoryUuid(repositoryUuid: string): GetRepositoryByProjectIdRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
}