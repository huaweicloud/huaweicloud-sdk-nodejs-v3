

export class ListMergeRequestChangesTreesRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    private 'approval_user_id'?: number;
    private 'commit_id'?: string;
    private 'from_diff_id'?: number;
    private 'to_diff_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, mergeRequestIid?: number, commitId?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
        this['commit_id'] = commitId;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestChangesTreesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestChangesTreesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withApprovalUserId(approvalUserId: number): ListMergeRequestChangesTreesRequest {
        this['approval_user_id'] = approvalUserId;
        return this;
    }
    public set approvalUserId(approvalUserId: number  | undefined) {
        this['approval_user_id'] = approvalUserId;
    }
    public get approvalUserId(): number | undefined {
        return this['approval_user_id'];
    }
    public withCommitId(commitId: string): ListMergeRequestChangesTreesRequest {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withFromDiffId(fromDiffId: number): ListMergeRequestChangesTreesRequest {
        this['from_diff_id'] = fromDiffId;
        return this;
    }
    public set fromDiffId(fromDiffId: number  | undefined) {
        this['from_diff_id'] = fromDiffId;
    }
    public get fromDiffId(): number | undefined {
        return this['from_diff_id'];
    }
    public withToDiffId(toDiffId: number): ListMergeRequestChangesTreesRequest {
        this['to_diff_id'] = toDiffId;
        return this;
    }
    public set toDiffId(toDiffId: number  | undefined) {
        this['to_diff_id'] = toDiffId;
    }
    public get toDiffId(): number | undefined {
        return this['to_diff_id'];
    }
    public withOffset(offset: number): ListMergeRequestChangesTreesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestChangesTreesRequest {
        this['limit'] = limit;
        return this;
    }
}