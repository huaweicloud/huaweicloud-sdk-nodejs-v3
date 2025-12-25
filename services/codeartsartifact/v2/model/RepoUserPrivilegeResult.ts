import { RepoUserPrivilegeV5 } from './RepoUserPrivilegeV5';


export class RepoUserPrivilegeResult {
    public total?: number;
    public list?: Array<RepoUserPrivilegeV5>;
    public constructor() { 
    }
    public withTotal(total: number): RepoUserPrivilegeResult {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<RepoUserPrivilegeV5>): RepoUserPrivilegeResult {
        this['list'] = list;
        return this;
    }
}