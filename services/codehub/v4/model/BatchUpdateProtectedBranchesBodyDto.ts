import { ProtectedBranchProtectedActionBodyDto } from './ProtectedBranchProtectedActionBodyDto';


export class BatchUpdateProtectedBranchesBodyDto {
    public names?: Array<string>;
    public actions?: Array<ProtectedBranchProtectedActionBodyDto>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): BatchUpdateProtectedBranchesBodyDto {
        this['names'] = names;
        return this;
    }
    public withActions(actions: Array<ProtectedBranchProtectedActionBodyDto>): BatchUpdateProtectedBranchesBodyDto {
        this['actions'] = actions;
        return this;
    }
}