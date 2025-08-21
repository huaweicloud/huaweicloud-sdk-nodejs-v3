

export class ListCommitAssociatedMergeRequestsRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ListCommitAssociatedMergeRequestsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ListCommitAssociatedMergeRequestsRequest {
        this['sha'] = sha;
        return this;
    }
    public withOffset(offset: number): ListCommitAssociatedMergeRequestsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommitAssociatedMergeRequestsRequest {
        this['limit'] = limit;
        return this;
    }
}