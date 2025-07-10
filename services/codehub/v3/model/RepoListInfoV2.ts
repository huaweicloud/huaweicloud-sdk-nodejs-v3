import { RepoInfoV2 } from './RepoInfoV2';


export class RepoListInfoV2 {
    public repositories?: Array<RepoInfoV2>;
    public total?: number;
    public constructor() { 
    }
    public withRepositories(repositories: Array<RepoInfoV2>): RepoListInfoV2 {
        this['repositories'] = repositories;
        return this;
    }
    public withTotal(total: number): RepoListInfoV2 {
        this['total'] = total;
        return this;
    }
}