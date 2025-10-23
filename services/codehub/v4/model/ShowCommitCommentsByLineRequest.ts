

export class ShowCommitCommentsByLineRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ShowCommitCommentsByLineRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ShowCommitCommentsByLineRequest {
        this['sha'] = sha;
        return this;
    }
}