

export class ShowDiffCommitRequest {
    private 'repository_id'?: number;
    public sha?: string;
    private 'ignore_whitespace_change'?: boolean;
    private 'not_statistic'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ShowDiffCommitRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ShowDiffCommitRequest {
        this['sha'] = sha;
        return this;
    }
    public withIgnoreWhitespaceChange(ignoreWhitespaceChange: boolean): ShowDiffCommitRequest {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
        return this;
    }
    public set ignoreWhitespaceChange(ignoreWhitespaceChange: boolean  | undefined) {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
    }
    public get ignoreWhitespaceChange(): boolean | undefined {
        return this['ignore_whitespace_change'];
    }
    public withNotStatistic(notStatistic: boolean): ShowDiffCommitRequest {
        this['not_statistic'] = notStatistic;
        return this;
    }
    public set notStatistic(notStatistic: boolean  | undefined) {
        this['not_statistic'] = notStatistic;
    }
    public get notStatistic(): boolean | undefined {
        return this['not_statistic'];
    }
    public withOffset(offset: number): ShowDiffCommitRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDiffCommitRequest {
        this['limit'] = limit;
        return this;
    }
}