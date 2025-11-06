

export class ListRepoMembersRequest {
    private 'page_index'?: number;
    private 'page_size'?: number;
    private 'repository_uuid'?: string;
    public subject?: string;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withPageIndex(pageIndex: number): ListRepoMembersRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListRepoMembersRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withRepositoryUuid(repositoryUuid: string): ListRepoMembersRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withSubject(subject: string): ListRepoMembersRequest {
        this['subject'] = subject;
        return this;
    }
}