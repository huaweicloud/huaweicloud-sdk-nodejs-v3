import { RepositoryProtectedTagActionBodyDto } from './RepositoryProtectedTagActionBodyDto';


export class RepositoryProtectedTagBodyDto {
    public names?: Array<string>;
    public actions?: Array<RepositoryProtectedTagActionBodyDto>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): RepositoryProtectedTagBodyDto {
        this['names'] = names;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedTagActionBodyDto>): RepositoryProtectedTagBodyDto {
        this['actions'] = actions;
        return this;
    }
}