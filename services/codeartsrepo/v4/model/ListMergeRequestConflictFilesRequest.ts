

export class ListMergeRequestConflictFilesRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public offset?: number;
    public limit?: number;
    private 'hide_content'?: boolean;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestConflictFilesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestConflictFilesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withOffset(offset: number): ListMergeRequestConflictFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestConflictFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withHideContent(hideContent: boolean): ListMergeRequestConflictFilesRequest {
        this['hide_content'] = hideContent;
        return this;
    }
    public set hideContent(hideContent: boolean  | undefined) {
        this['hide_content'] = hideContent;
    }
    public get hideContent(): boolean | undefined {
        return this['hide_content'];
    }
}