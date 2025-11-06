import { Branch } from './Branch';


export class BranchList {
    public branches?: Array<Branch>;
    public total?: number;
    public constructor() { 
    }
    public withBranches(branches: Array<Branch>): BranchList {
        this['branches'] = branches;
        return this;
    }
    public withTotal(total: number): BranchList {
        this['total'] = total;
        return this;
    }
}