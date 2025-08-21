

export class ListRepositoryMergeRequestsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    public state?: ListRepositoryMergeRequestsRequestStateEnum | string;
    private 'order_by'?: ListRepositoryMergeRequestsRequestOrderByEnum | string;
    public sort?: ListRepositoryMergeRequestsRequestSortEnum | string;
    private 'author_id'?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public search?: string;
    private 'source_repository_id'?: number;
    private 'only_count'?: boolean;
    public labels?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryMergeRequestsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryMergeRequestsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryMergeRequestsRequest {
        this['limit'] = limit;
        return this;
    }
    public withState(state: ListRepositoryMergeRequestsRequestStateEnum | string): ListRepositoryMergeRequestsRequest {
        this['state'] = state;
        return this;
    }
    public withOrderBy(orderBy: ListRepositoryMergeRequestsRequestOrderByEnum | string): ListRepositoryMergeRequestsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListRepositoryMergeRequestsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListRepositoryMergeRequestsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListRepositoryMergeRequestsRequestSortEnum | string): ListRepositoryMergeRequestsRequest {
        this['sort'] = sort;
        return this;
    }
    public withAuthorId(authorId: string): ListRepositoryMergeRequestsRequest {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withSourceBranch(sourceBranch: string): ListRepositoryMergeRequestsRequest {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ListRepositoryMergeRequestsRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSearch(search: string): ListRepositoryMergeRequestsRequest {
        this['search'] = search;
        return this;
    }
    public withSourceRepositoryId(sourceRepositoryId: number): ListRepositoryMergeRequestsRequest {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withOnlyCount(onlyCount: boolean): ListRepositoryMergeRequestsRequest {
        this['only_count'] = onlyCount;
        return this;
    }
    public set onlyCount(onlyCount: boolean  | undefined) {
        this['only_count'] = onlyCount;
    }
    public get onlyCount(): boolean | undefined {
        return this['only_count'];
    }
    public withLabels(labels: string): ListRepositoryMergeRequestsRequest {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryMergeRequestsRequestStateEnum {
    ALL = 'all',
    OPENED = 'opened',
    CLOSED = 'closed',
    MERGED = 'merged'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryMergeRequestsRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryMergeRequestsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
