

export class ListMergeRequestReviewersRequest {
    private 'repository_id'?: number;
    private 'target_branch'?: string;
    private 'source_branch'?: string;
    private 'merge_request_iid'?: number;
    private 'target_repository_id'?: string;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestReviewersRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTargetBranch(targetBranch: string): ListMergeRequestReviewersRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSourceBranch(sourceBranch: string): ListMergeRequestReviewersRequest {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestReviewersRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withTargetRepositoryId(targetRepositoryId: string): ListMergeRequestReviewersRequest {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: string  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): string | undefined {
        return this['target_repository_id'];
    }
    public withSearch(search: string): ListMergeRequestReviewersRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListMergeRequestReviewersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestReviewersRequest {
        this['limit'] = limit;
        return this;
    }
}