

export class ListRepositoryUserGroupsRequest {
    private 'repository_id'?: number;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryUserGroupsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSearch(search: string): ListRepositoryUserGroupsRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListRepositoryUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}