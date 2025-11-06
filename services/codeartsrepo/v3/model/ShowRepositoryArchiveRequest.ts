

export class ShowRepositoryArchiveRequest {
    private 'repository_uuid'?: string;
    public sha?: string;
    public format?: string;
    public constructor(repositoryUuid?: string, sha?: string, format?: string) { 
        this['repository_uuid'] = repositoryUuid;
        this['sha'] = sha;
        this['format'] = format;
    }
    public withRepositoryUuid(repositoryUuid: string): ShowRepositoryArchiveRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withSha(sha: string): ShowRepositoryArchiveRequest {
        this['sha'] = sha;
        return this;
    }
    public withFormat(format: string): ShowRepositoryArchiveRequest {
        this['format'] = format;
        return this;
    }
}