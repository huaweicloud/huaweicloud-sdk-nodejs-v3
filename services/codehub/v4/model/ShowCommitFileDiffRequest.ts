

export class ShowCommitFileDiffRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public path?: string;
    private 'old_path'?: string;
    private 'ignore_whitespace_change'?: boolean;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ShowCommitFileDiffRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ShowCommitFileDiffRequest {
        this['sha'] = sha;
        return this;
    }
    public withPath(path: string): ShowCommitFileDiffRequest {
        this['path'] = path;
        return this;
    }
    public withOldPath(oldPath: string): ShowCommitFileDiffRequest {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withIgnoreWhitespaceChange(ignoreWhitespaceChange: boolean): ShowCommitFileDiffRequest {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
        return this;
    }
    public set ignoreWhitespaceChange(ignoreWhitespaceChange: boolean  | undefined) {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
    }
    public get ignoreWhitespaceChange(): boolean | undefined {
        return this['ignore_whitespace_change'];
    }
}