

export class ListCommitAssociatedRefsRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ListCommitAssociatedRefsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ListCommitAssociatedRefsRequest {
        this['sha'] = sha;
        return this;
    }
    public withOffset(offset: number): ListCommitAssociatedRefsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommitAssociatedRefsRequest {
        this['limit'] = limit;
        return this;
    }
}