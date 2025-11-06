

export class ListPersonalMergeRequestsRequest {
    public state?: ListPersonalMergeRequestsRequestStateEnum | string;
    private 'order_by'?: ListPersonalMergeRequestsRequestOrderByEnum | string;
    public sort?: ListPersonalMergeRequestsRequestSortEnum | string;
    public labels?: string;
    private 'created_before'?: Date;
    private 'created_after'?: Date;
    private 'updated_after'?: Date;
    private 'updated_before'?: Date;
    public view?: ListPersonalMergeRequestsRequestViewEnum | string;
    private 'author_id'?: string;
    public scope?: ListPersonalMergeRequestsRequestScopeEnum | string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public search?: string;
    public wip?: ListPersonalMergeRequestsRequestWipEnum | string;
    private 'merged_by'?: string;
    private 'merged_after'?: Date;
    private 'merged_before'?: Date;
    public offset?: number;
    public limit?: number;
    private 'only_count'?: boolean;
    public constructor() { 
    }
    public withState(state: ListPersonalMergeRequestsRequestStateEnum | string): ListPersonalMergeRequestsRequest {
        this['state'] = state;
        return this;
    }
    public withOrderBy(orderBy: ListPersonalMergeRequestsRequestOrderByEnum | string): ListPersonalMergeRequestsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListPersonalMergeRequestsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListPersonalMergeRequestsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListPersonalMergeRequestsRequestSortEnum | string): ListPersonalMergeRequestsRequest {
        this['sort'] = sort;
        return this;
    }
    public withLabels(labels: string): ListPersonalMergeRequestsRequest {
        this['labels'] = labels;
        return this;
    }
    public withCreatedBefore(createdBefore: Date): ListPersonalMergeRequestsRequest {
        this['created_before'] = createdBefore;
        return this;
    }
    public set createdBefore(createdBefore: Date  | undefined) {
        this['created_before'] = createdBefore;
    }
    public get createdBefore(): Date | undefined {
        return this['created_before'];
    }
    public withCreatedAfter(createdAfter: Date): ListPersonalMergeRequestsRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withUpdatedAfter(updatedAfter: Date): ListPersonalMergeRequestsRequest {
        this['updated_after'] = updatedAfter;
        return this;
    }
    public set updatedAfter(updatedAfter: Date  | undefined) {
        this['updated_after'] = updatedAfter;
    }
    public get updatedAfter(): Date | undefined {
        return this['updated_after'];
    }
    public withUpdatedBefore(updatedBefore: Date): ListPersonalMergeRequestsRequest {
        this['updated_before'] = updatedBefore;
        return this;
    }
    public set updatedBefore(updatedBefore: Date  | undefined) {
        this['updated_before'] = updatedBefore;
    }
    public get updatedBefore(): Date | undefined {
        return this['updated_before'];
    }
    public withView(view: ListPersonalMergeRequestsRequestViewEnum | string): ListPersonalMergeRequestsRequest {
        this['view'] = view;
        return this;
    }
    public withAuthorId(authorId: string): ListPersonalMergeRequestsRequest {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withScope(scope: ListPersonalMergeRequestsRequestScopeEnum | string): ListPersonalMergeRequestsRequest {
        this['scope'] = scope;
        return this;
    }
    public withSourceBranch(sourceBranch: string): ListPersonalMergeRequestsRequest {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ListPersonalMergeRequestsRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSearch(search: string): ListPersonalMergeRequestsRequest {
        this['search'] = search;
        return this;
    }
    public withWip(wip: ListPersonalMergeRequestsRequestWipEnum | string): ListPersonalMergeRequestsRequest {
        this['wip'] = wip;
        return this;
    }
    public withMergedBy(mergedBy: string): ListPersonalMergeRequestsRequest {
        this['merged_by'] = mergedBy;
        return this;
    }
    public set mergedBy(mergedBy: string  | undefined) {
        this['merged_by'] = mergedBy;
    }
    public get mergedBy(): string | undefined {
        return this['merged_by'];
    }
    public withMergedAfter(mergedAfter: Date): ListPersonalMergeRequestsRequest {
        this['merged_after'] = mergedAfter;
        return this;
    }
    public set mergedAfter(mergedAfter: Date  | undefined) {
        this['merged_after'] = mergedAfter;
    }
    public get mergedAfter(): Date | undefined {
        return this['merged_after'];
    }
    public withMergedBefore(mergedBefore: Date): ListPersonalMergeRequestsRequest {
        this['merged_before'] = mergedBefore;
        return this;
    }
    public set mergedBefore(mergedBefore: Date  | undefined) {
        this['merged_before'] = mergedBefore;
    }
    public get mergedBefore(): Date | undefined {
        return this['merged_before'];
    }
    public withOffset(offset: number): ListPersonalMergeRequestsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPersonalMergeRequestsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOnlyCount(onlyCount: boolean): ListPersonalMergeRequestsRequest {
        this['only_count'] = onlyCount;
        return this;
    }
    public set onlyCount(onlyCount: boolean  | undefined) {
        this['only_count'] = onlyCount;
    }
    public get onlyCount(): boolean | undefined {
        return this['only_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestStateEnum {
    OPENED = 'opened',
    CLOSED = 'closed',
    LOCKED = 'locked',
    MERGED = 'merged',
    ALL = 'all'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    MERGED_AT = 'merged_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestViewEnum {
    SIMPLE = 'simple',
    BASIC = 'basic'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestScopeEnum {
    CREATED_BY_ME = 'created_by_me',
    ASSIGNED_TO_ME = 'assigned_to_me',
    NEED_MY_REVIEW = 'need_my_review',
    NEED_MY_APPROVE = 'need_my_approve',
    ALL = 'all'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalMergeRequestsRequestWipEnum {
    TRUE = 'true',
    FALSE = 'false'
}
