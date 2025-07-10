

export class ListCommitsRequest {
    private 'repo_id'?: number;
    private 'ref_name'?: string;
    public since?: string;
    public until?: string;
    public path?: string;
    public all?: boolean;
    private 'with_stats'?: boolean;
    public page?: number;
    private 'per_page'?: number;
    public constructor(repoId?: number) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: number): ListCommitsRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withRefName(refName: string): ListCommitsRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withSince(since: string): ListCommitsRequest {
        this['since'] = since;
        return this;
    }
    public withUntil(until: string): ListCommitsRequest {
        this['until'] = until;
        return this;
    }
    public withPath(path: string): ListCommitsRequest {
        this['path'] = path;
        return this;
    }
    public withAll(all: boolean): ListCommitsRequest {
        this['all'] = all;
        return this;
    }
    public withWithStats(withStats: boolean): ListCommitsRequest {
        this['with_stats'] = withStats;
        return this;
    }
    public set withStats(withStats: boolean  | undefined) {
        this['with_stats'] = withStats;
    }
    public get withStats(): boolean | undefined {
        return this['with_stats'];
    }
    public withPage(page: number): ListCommitsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListCommitsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}