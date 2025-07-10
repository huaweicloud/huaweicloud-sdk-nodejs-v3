

export class ListMergeRequestRequest {
    private 'repository_id'?: number;
    public state?: string;
    public page?: string;
    private 'per_page'?: string;
    public search?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withState(state: string): ListMergeRequestRequest {
        this['state'] = state;
        return this;
    }
    public withPage(page: string): ListMergeRequestRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: string): ListMergeRequestRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
    public withSearch(search: string): ListMergeRequestRequest {
        this['search'] = search;
        return this;
    }
}