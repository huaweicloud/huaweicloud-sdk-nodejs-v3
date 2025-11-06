

export class ListCommitDiscussionsRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public sort?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ListCommitDiscussionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ListCommitDiscussionsRequest {
        this['sha'] = sha;
        return this;
    }
    public withSort(sort: string): ListCommitDiscussionsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOffset(offset: number): ListCommitDiscussionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommitDiscussionsRequest {
        this['limit'] = limit;
        return this;
    }
}