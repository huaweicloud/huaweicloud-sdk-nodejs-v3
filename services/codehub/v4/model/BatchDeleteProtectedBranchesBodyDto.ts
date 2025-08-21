

export class BatchDeleteProtectedBranchesBodyDto {
    public names?: Array<string>;
    public constructor() { 
    }
    public withNames(names: Array<string>): BatchDeleteProtectedBranchesBodyDto {
        this['names'] = names;
        return this;
    }
}