

export class ListRepositoryDeployKeysRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryDeployKeysRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryDeployKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryDeployKeysRequest {
        this['limit'] = limit;
        return this;
    }
}