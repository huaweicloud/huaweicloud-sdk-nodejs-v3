

export class ShowMergeRequestCommentsByLineRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public line?: number;
    private 'with_commit_comments'?: boolean;
    public path?: string;
    public view?: ShowMergeRequestCommentsByLineRequestViewEnum | string;
    private 'base_sha'?: string;
    private 'start_sha'?: string;
    private 'head_sha'?: string;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ShowMergeRequestCommentsByLineRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ShowMergeRequestCommentsByLineRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withLine(line: number): ShowMergeRequestCommentsByLineRequest {
        this['line'] = line;
        return this;
    }
    public withWithCommitComments(withCommitComments: boolean): ShowMergeRequestCommentsByLineRequest {
        this['with_commit_comments'] = withCommitComments;
        return this;
    }
    public set withCommitComments(withCommitComments: boolean  | undefined) {
        this['with_commit_comments'] = withCommitComments;
    }
    public get withCommitComments(): boolean | undefined {
        return this['with_commit_comments'];
    }
    public withPath(path: string): ShowMergeRequestCommentsByLineRequest {
        this['path'] = path;
        return this;
    }
    public withView(view: ShowMergeRequestCommentsByLineRequestViewEnum | string): ShowMergeRequestCommentsByLineRequest {
        this['view'] = view;
        return this;
    }
    public withBaseSha(baseSha: string): ShowMergeRequestCommentsByLineRequest {
        this['base_sha'] = baseSha;
        return this;
    }
    public set baseSha(baseSha: string  | undefined) {
        this['base_sha'] = baseSha;
    }
    public get baseSha(): string | undefined {
        return this['base_sha'];
    }
    public withStartSha(startSha: string): ShowMergeRequestCommentsByLineRequest {
        this['start_sha'] = startSha;
        return this;
    }
    public set startSha(startSha: string  | undefined) {
        this['start_sha'] = startSha;
    }
    public get startSha(): string | undefined {
        return this['start_sha'];
    }
    public withHeadSha(headSha: string): ShowMergeRequestCommentsByLineRequest {
        this['head_sha'] = headSha;
        return this;
    }
    public set headSha(headSha: string  | undefined) {
        this['head_sha'] = headSha;
    }
    public get headSha(): string | undefined {
        return this['head_sha'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMergeRequestCommentsByLineRequestViewEnum {
    BASIC = 'basic'
}
