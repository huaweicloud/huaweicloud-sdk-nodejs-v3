

export class ShowDiffCommitRequest {
    private 'repo_id'?: number;
    public sha?: string;
    public constructor(repoId?: number, sha?: string) { 
        this['repo_id'] = repoId;
        this['sha'] = sha;
    }
    public withRepoId(repoId: number): ShowDiffCommitRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withSha(sha: string): ShowDiffCommitRequest {
        this['sha'] = sha;
        return this;
    }
}