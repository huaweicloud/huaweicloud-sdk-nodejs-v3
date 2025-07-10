

export class ShowSingleCommitRequest {
    private 'repo_id'?: number;
    public sha?: string;
    public stats?: boolean;
    public constructor(repoId?: number, sha?: string) { 
        this['repo_id'] = repoId;
        this['sha'] = sha;
    }
    public withRepoId(repoId: number): ShowSingleCommitRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withSha(sha: string): ShowSingleCommitRequest {
        this['sha'] = sha;
        return this;
    }
    public withStats(stats: boolean): ShowSingleCommitRequest {
        this['stats'] = stats;
        return this;
    }
}