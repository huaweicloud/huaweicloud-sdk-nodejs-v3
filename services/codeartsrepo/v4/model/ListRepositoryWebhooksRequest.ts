

export class ListRepositoryWebhooksRequest {
    private 'repository_id'?: number;
    private 'include_system'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryWebhooksRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIncludeSystem(includeSystem: boolean): ListRepositoryWebhooksRequest {
        this['include_system'] = includeSystem;
        return this;
    }
    public set includeSystem(includeSystem: boolean  | undefined) {
        this['include_system'] = includeSystem;
    }
    public get includeSystem(): boolean | undefined {
        return this['include_system'];
    }
    public withOffset(offset: number): ListRepositoryWebhooksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryWebhooksRequest {
        this['limit'] = limit;
        return this;
    }
}