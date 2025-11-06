import { RepoInfo } from './RepoInfo';


export class RepoListInfo {
    public repositorys?: Array<RepoInfo>;
    public total?: number;
    public constructor() { 
    }
    public withRepositorys(repositorys: Array<RepoInfo>): RepoListInfo {
        this['repositorys'] = repositorys;
        return this;
    }
    public withTotal(total: number): RepoListInfo {
        this['total'] = total;
        return this;
    }
}