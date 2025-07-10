

export class ListMergeChangesRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: string;
    private 'file_path'?: string;
    private 'ignore_whitespace_change'?: boolean;
    private 'force_encode'?: boolean;
    public view?: ListMergeChangesRequestViewEnum | string;
    private 'commit_id'?: string;
    public constructor(repositoryId?: number, mergeRequestIid?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeChangesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: string): ListMergeChangesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: string  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): string | undefined {
        return this['merge_request_iid'];
    }
    public withFilePath(filePath: string): ListMergeChangesRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withIgnoreWhitespaceChange(ignoreWhitespaceChange: boolean): ListMergeChangesRequest {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
        return this;
    }
    public set ignoreWhitespaceChange(ignoreWhitespaceChange: boolean  | undefined) {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
    }
    public get ignoreWhitespaceChange(): boolean | undefined {
        return this['ignore_whitespace_change'];
    }
    public withForceEncode(forceEncode: boolean): ListMergeChangesRequest {
        this['force_encode'] = forceEncode;
        return this;
    }
    public set forceEncode(forceEncode: boolean  | undefined) {
        this['force_encode'] = forceEncode;
    }
    public get forceEncode(): boolean | undefined {
        return this['force_encode'];
    }
    public withView(view: ListMergeChangesRequestViewEnum | string): ListMergeChangesRequest {
        this['view'] = view;
        return this;
    }
    public withCommitId(commitId: string): ListMergeChangesRequest {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeChangesRequestViewEnum {
    SIMPLE = 'simple'
}
