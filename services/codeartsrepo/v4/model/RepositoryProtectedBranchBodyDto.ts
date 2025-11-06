import { ProtectedBranchProtectedActionBodyDto } from './ProtectedBranchProtectedActionBodyDto';


export class RepositoryProtectedBranchBodyDto {
    public names?: Array<string>;
    public actions?: Array<ProtectedBranchProtectedActionBodyDto>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): RepositoryProtectedBranchBodyDto {
        this['names'] = names;
        return this;
    }
    public withActions(actions: Array<ProtectedBranchProtectedActionBodyDto>): RepositoryProtectedBranchBodyDto {
        this['actions'] = actions;
        return this;
    }
}