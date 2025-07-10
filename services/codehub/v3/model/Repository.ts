

export class Repository {
    private 'repository_uuid'?: string;
    public constructor() { 
    }
    public withRepositoryUuid(repositoryUuid: string): Repository {
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