

export class ListRepositoryFilePushPermissionsRequest {
    private 'repository_id'?: number;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryFilePushPermissionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSearch(search: string): ListRepositoryFilePushPermissionsRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListRepositoryFilePushPermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryFilePushPermissionsRequest {
        this['limit'] = limit;
        return this;
    }
}