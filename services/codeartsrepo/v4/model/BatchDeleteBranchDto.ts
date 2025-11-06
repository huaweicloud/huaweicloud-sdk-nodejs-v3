

export class BatchDeleteBranchDto {
    public branches?: Array<string>;
    public constructor(branches?: Array<string>) { 
        this['branches'] = branches;
    }
    public withBranches(branches: Array<string>): BatchDeleteBranchDto {
        this['branches'] = branches;
        return this;
    }
}