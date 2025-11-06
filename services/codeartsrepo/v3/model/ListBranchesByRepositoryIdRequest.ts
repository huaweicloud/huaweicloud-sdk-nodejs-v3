

export class ListBranchesByRepositoryIdRequest {
    private 'repository_id'?: number;
    public page?: string;
    private 'per_page'?: string;
    public match?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListBranchesByRepositoryIdRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withPage(page: string): ListBranchesByRepositoryIdRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: string): ListBranchesByRepositoryIdRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
    public withMatch(match: string): ListBranchesByRepositoryIdRequest {
        this['match'] = match;
        return this;
    }
}