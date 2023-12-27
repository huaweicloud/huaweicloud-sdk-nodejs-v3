

export class ShowRepositoryInfoRequest {
    private 'repo_id'?: string;
    public constructor(repoId?: string) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: string): ShowRepositoryInfoRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
}