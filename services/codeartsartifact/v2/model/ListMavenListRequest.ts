

export class ListMavenListRequest {
    private 'default'?: boolean;
    public policy?: string;
    private 'repo_ids'?: string;
    public access?: string;
    public constructor() { 
    }
    public withDefault(_default: boolean): ListMavenListRequest {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withPolicy(policy: string): ListMavenListRequest {
        this['policy'] = policy;
        return this;
    }
    public withRepoIds(repoIds: string): ListMavenListRequest {
        this['repo_ids'] = repoIds;
        return this;
    }
    public set repoIds(repoIds: string  | undefined) {
        this['repo_ids'] = repoIds;
    }
    public get repoIds(): string | undefined {
        return this['repo_ids'];
    }
    public withAccess(access: string): ListMavenListRequest {
        this['access'] = access;
        return this;
    }
}