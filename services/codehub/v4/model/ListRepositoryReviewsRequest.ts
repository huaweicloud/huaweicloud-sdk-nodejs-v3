

export class ListRepositoryReviewsRequest {
    private 'repository_id'?: number;
    private 'noteable_type'?: ListRepositoryReviewsRequestNoteableTypeEnum | string;
    public search?: string;
    private 'start_date'?: Date;
    private 'end_date'?: Date;
    private 'only_count'?: boolean;
    private 'review_categories'?: string;
    private 'review_modules'?: string;
    public severity?: ListRepositoryReviewsRequestSeverityEnum | string;
    private 'assignee_id'?: number;
    private 'proposer_id'?: number;
    private 'target_branch'?: string;
    private 'include_reply'?: boolean;
    private 'order_by'?: ListRepositoryReviewsRequestOrderByEnum | string;
    public sort?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, noteableType?: string) { 
        this['repository_id'] = repositoryId;
        this['noteable_type'] = noteableType;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryReviewsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withNoteableType(noteableType: ListRepositoryReviewsRequestNoteableTypeEnum | string): ListRepositoryReviewsRequest {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: ListRepositoryReviewsRequestNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): ListRepositoryReviewsRequestNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withSearch(search: string): ListRepositoryReviewsRequest {
        this['search'] = search;
        return this;
    }
    public withStartDate(startDate: Date): ListRepositoryReviewsRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: Date  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): Date | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: Date): ListRepositoryReviewsRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: Date  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): Date | undefined {
        return this['end_date'];
    }
    public withOnlyCount(onlyCount: boolean): ListRepositoryReviewsRequest {
        this['only_count'] = onlyCount;
        return this;
    }
    public set onlyCount(onlyCount: boolean  | undefined) {
        this['only_count'] = onlyCount;
    }
    public get onlyCount(): boolean | undefined {
        return this['only_count'];
    }
    public withReviewCategories(reviewCategories: string): ListRepositoryReviewsRequest {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewModules(reviewModules: string): ListRepositoryReviewsRequest {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: ListRepositoryReviewsRequestSeverityEnum | string): ListRepositoryReviewsRequest {
        this['severity'] = severity;
        return this;
    }
    public withAssigneeId(assigneeId: number): ListRepositoryReviewsRequest {
        this['assignee_id'] = assigneeId;
        return this;
    }
    public set assigneeId(assigneeId: number  | undefined) {
        this['assignee_id'] = assigneeId;
    }
    public get assigneeId(): number | undefined {
        return this['assignee_id'];
    }
    public withProposerId(proposerId: number): ListRepositoryReviewsRequest {
        this['proposer_id'] = proposerId;
        return this;
    }
    public set proposerId(proposerId: number  | undefined) {
        this['proposer_id'] = proposerId;
    }
    public get proposerId(): number | undefined {
        return this['proposer_id'];
    }
    public withTargetBranch(targetBranch: string): ListRepositoryReviewsRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withIncludeReply(includeReply: boolean): ListRepositoryReviewsRequest {
        this['include_reply'] = includeReply;
        return this;
    }
    public set includeReply(includeReply: boolean  | undefined) {
        this['include_reply'] = includeReply;
    }
    public get includeReply(): boolean | undefined {
        return this['include_reply'];
    }
    public withOrderBy(orderBy: ListRepositoryReviewsRequestOrderByEnum | string): ListRepositoryReviewsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListRepositoryReviewsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListRepositoryReviewsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: string): ListRepositoryReviewsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOffset(offset: number): ListRepositoryReviewsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryReviewsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryReviewsRequestNoteableTypeEnum {
    COMMIT = 'Commit',
    MERGEREQUEST = 'MergeRequest'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryReviewsRequestSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryReviewsRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
