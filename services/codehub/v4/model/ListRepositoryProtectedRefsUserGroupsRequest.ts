

export class ListRepositoryProtectedRefsUserGroupsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    public search?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryProtectedRefsUserGroupsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryProtectedRefsUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryProtectedRefsUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListRepositoryProtectedRefsUserGroupsRequest {
        this['search'] = search;
        return this;
    }
}