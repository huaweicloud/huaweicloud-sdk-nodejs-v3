

export class ListMergeRequestChangesRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    private 'ignore_whitespace_change'?: boolean;
    private 'force_encode'?: boolean;
    private 'file_path'?: string;
    private 'from_diff_id'?: number;
    private 'to_diff_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, mergeRequestIid?: number, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestChangesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestChangesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withIgnoreWhitespaceChange(ignoreWhitespaceChange: boolean): ListMergeRequestChangesRequest {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
        return this;
    }
    public set ignoreWhitespaceChange(ignoreWhitespaceChange: boolean  | undefined) {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
    }
    public get ignoreWhitespaceChange(): boolean | undefined {
        return this['ignore_whitespace_change'];
    }
    public withForceEncode(forceEncode: boolean): ListMergeRequestChangesRequest {
        this['force_encode'] = forceEncode;
        return this;
    }
    public set forceEncode(forceEncode: boolean  | undefined) {
        this['force_encode'] = forceEncode;
    }
    public get forceEncode(): boolean | undefined {
        return this['force_encode'];
    }
    public withFilePath(filePath: string): ListMergeRequestChangesRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFromDiffId(fromDiffId: number): ListMergeRequestChangesRequest {
        this['from_diff_id'] = fromDiffId;
        return this;
    }
    public set fromDiffId(fromDiffId: number  | undefined) {
        this['from_diff_id'] = fromDiffId;
    }
    public get fromDiffId(): number | undefined {
        return this['from_diff_id'];
    }
    public withToDiffId(toDiffId: number): ListMergeRequestChangesRequest {
        this['to_diff_id'] = toDiffId;
        return this;
    }
    public set toDiffId(toDiffId: number  | undefined) {
        this['to_diff_id'] = toDiffId;
    }
    public get toDiffId(): number | undefined {
        return this['to_diff_id'];
    }
    public withOffset(offset: number): ListMergeRequestChangesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestChangesRequest {
        this['limit'] = limit;
        return this;
    }
}