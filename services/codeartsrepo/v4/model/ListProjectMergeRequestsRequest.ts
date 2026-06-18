

export class ListProjectMergeRequestsRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public state?: ListProjectMergeRequestsRequestStateEnum | string;
    private 'order_by'?: ListProjectMergeRequestsRequestOrderByEnum | string;
    public sort?: ListProjectMergeRequestsRequestSortEnum | string;
    private 'author_id'?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public search?: string;
    private 'source_repository_id'?: number;
    private 'only_count'?: boolean;
    public labels?: string;
    public topic?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectMergeRequestsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectMergeRequestsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectMergeRequestsRequest {
        this['limit'] = limit;
        return this;
    }
    public withState(state: ListProjectMergeRequestsRequestStateEnum | string): ListProjectMergeRequestsRequest {
        this['state'] = state;
        return this;
    }
    public withOrderBy(orderBy: ListProjectMergeRequestsRequestOrderByEnum | string): ListProjectMergeRequestsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListProjectMergeRequestsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListProjectMergeRequestsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListProjectMergeRequestsRequestSortEnum | string): ListProjectMergeRequestsRequest {
        this['sort'] = sort;
        return this;
    }
    public withAuthorId(authorId: string): ListProjectMergeRequestsRequest {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withSourceBranch(sourceBranch: string): ListProjectMergeRequestsRequest {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ListProjectMergeRequestsRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSearch(search: string): ListProjectMergeRequestsRequest {
        this['search'] = search;
        return this;
    }
    public withSourceRepositoryId(sourceRepositoryId: number): ListProjectMergeRequestsRequest {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withOnlyCount(onlyCount: boolean): ListProjectMergeRequestsRequest {
        this['only_count'] = onlyCount;
        return this;
    }
    public set onlyCount(onlyCount: boolean  | undefined) {
        this['only_count'] = onlyCount;
    }
    public get onlyCount(): boolean | undefined {
        return this['only_count'];
    }
    public withLabels(labels: string): ListProjectMergeRequestsRequest {
        this['labels'] = labels;
        return this;
    }
    public withTopic(topic: string): ListProjectMergeRequestsRequest {
        this['topic'] = topic;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectMergeRequestsRequestStateEnum {
    ALL = 'all',
    OPENED = 'opened',
    CLOSED = 'closed',
    MERGED = 'merged'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProjectMergeRequestsRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProjectMergeRequestsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
