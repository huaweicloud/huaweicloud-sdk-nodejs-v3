

export class ShowCommitRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public stats?: boolean;
    private 'show_code_changes'?: boolean;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ShowCommitRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): ShowCommitRequest {
        this['sha'] = sha;
        return this;
    }
    public withStats(stats: boolean): ShowCommitRequest {
        this['stats'] = stats;
        return this;
    }
    public withShowCodeChanges(showCodeChanges: boolean): ShowCommitRequest {
        this['show_code_changes'] = showCodeChanges;
        return this;
    }
    public set showCodeChanges(showCodeChanges: boolean  | undefined) {
        this['show_code_changes'] = showCodeChanges;
    }
    public get showCodeChanges(): boolean | undefined {
        return this['show_code_changes'];
    }
}