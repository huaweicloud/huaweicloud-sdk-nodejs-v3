import { RepositoryBasicDO } from './RepositoryBasicDO';


export class ListAllRepositoriesResult {
    public total?: number;
    public repositories?: Array<RepositoryBasicDO>;
    public constructor() { 
    }
    public withTotal(total: number): ListAllRepositoriesResult {
        this['total'] = total;
        return this;
    }
    public withRepositories(repositories: Array<RepositoryBasicDO>): ListAllRepositoriesResult {
        this['repositories'] = repositories;
        return this;
    }
}