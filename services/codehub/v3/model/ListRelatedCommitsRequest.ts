

export class ListRelatedCommitsRequest {
    private 'repository_uuid'?: string;
    public type?: number;
    public search?: string;
    public page?: number;
    private 'per_page'?: number;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withRepositoryUuid(repositoryUuid: string): ListRelatedCommitsRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withType(type: number): ListRelatedCommitsRequest {
        this['type'] = type;
        return this;
    }
    public withSearch(search: string): ListRelatedCommitsRequest {
        this['search'] = search;
        return this;
    }
    public withPage(page: number): ListRelatedCommitsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListRelatedCommitsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}