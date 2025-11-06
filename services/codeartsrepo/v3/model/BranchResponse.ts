import { BranchesItem } from './BranchesItem';


export class BranchResponse {
    public branches?: Array<BranchesItem>;
    public total?: number;
    public constructor() { 
    }
    public withBranches(branches: Array<BranchesItem>): BranchResponse {
        this['branches'] = branches;
        return this;
    }
    public withTotal(total: number): BranchResponse {
        this['total'] = total;
        return this;
    }
}