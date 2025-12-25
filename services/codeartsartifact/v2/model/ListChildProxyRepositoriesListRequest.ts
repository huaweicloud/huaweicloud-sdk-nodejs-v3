

export class ListChildProxyRepositoriesListRequest {
    private 'repo_id'?: string;
    public type?: string;
    public constructor(repoId?: string) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: string): ListChildProxyRepositoriesListRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withType(type: string): ListChildProxyRepositoriesListRequest {
        this['type'] = type;
        return this;
    }
}