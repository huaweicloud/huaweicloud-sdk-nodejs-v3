

export class ShowProjectRelatedRepositoryRequest {
    private 'search_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'repo_id'?: string;
    public constructor() { 
    }
    public withSearchName(searchName: string): ShowProjectRelatedRepositoryRequest {
        this['search_name'] = searchName;
        return this;
    }
    public set searchName(searchName: string  | undefined) {
        this['search_name'] = searchName;
    }
    public get searchName(): string | undefined {
        return this['search_name'];
    }
    public withOffset(offset: number): ShowProjectRelatedRepositoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowProjectRelatedRepositoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withRepoId(repoId: string): ShowProjectRelatedRepositoryRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
}