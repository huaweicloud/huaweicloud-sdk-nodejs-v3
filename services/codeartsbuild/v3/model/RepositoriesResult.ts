

export class RepositoriesResult {
    public latest?: string;
    public repositories?: Array<string>;
    public constructor() { 
    }
    public withLatest(latest: string): RepositoriesResult {
        this['latest'] = latest;
        return this;
    }
    public withRepositories(repositories: Array<string>): RepositoriesResult {
        this['repositories'] = repositories;
        return this;
    }
}