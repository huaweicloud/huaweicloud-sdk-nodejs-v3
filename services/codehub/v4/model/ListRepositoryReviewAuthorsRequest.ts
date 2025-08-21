

export class ListRepositoryReviewAuthorsRequest {
    private 'repository_id'?: number;
    private 'noteable_type'?: ListRepositoryReviewAuthorsRequestNoteableTypeEnum | string;
    private 'resolved_status'?: ListRepositoryReviewAuthorsRequestResolvedStatusEnum | string;
    private 'reviewers_filter'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, noteableType?: string, resolvedStatus?: string) { 
        this['repository_id'] = repositoryId;
        this['noteable_type'] = noteableType;
        this['resolved_status'] = resolvedStatus;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryReviewAuthorsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withNoteableType(noteableType: ListRepositoryReviewAuthorsRequestNoteableTypeEnum | string): ListRepositoryReviewAuthorsRequest {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: ListRepositoryReviewAuthorsRequestNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): ListRepositoryReviewAuthorsRequestNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withResolvedStatus(resolvedStatus: ListRepositoryReviewAuthorsRequestResolvedStatusEnum | string): ListRepositoryReviewAuthorsRequest {
        this['resolved_status'] = resolvedStatus;
        return this;
    }
    public set resolvedStatus(resolvedStatus: ListRepositoryReviewAuthorsRequestResolvedStatusEnum | string  | undefined) {
        this['resolved_status'] = resolvedStatus;
    }
    public get resolvedStatus(): ListRepositoryReviewAuthorsRequestResolvedStatusEnum | string | undefined {
        return this['resolved_status'];
    }
    public withReviewersFilter(reviewersFilter: string): ListRepositoryReviewAuthorsRequest {
        this['reviewers_filter'] = reviewersFilter;
        return this;
    }
    public set reviewersFilter(reviewersFilter: string  | undefined) {
        this['reviewers_filter'] = reviewersFilter;
    }
    public get reviewersFilter(): string | undefined {
        return this['reviewers_filter'];
    }
    public withOffset(offset: number): ListRepositoryReviewAuthorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryReviewAuthorsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryReviewAuthorsRequestNoteableTypeEnum {
    COMMIT = 'Commit',
    MERGEREQUEST = 'MergeRequest'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryReviewAuthorsRequestResolvedStatusEnum {
    RESOLVED = 'resolved',
    UNRESOLVED = 'unresolved',
    ALL = 'all'
}
