import { RepositoryProtectedTagActionBodyDto } from './RepositoryProtectedTagActionBodyDto';


export class BatchUpdateProtectedTagsBodyDto {
    public names?: Array<string>;
    public actions?: Array<RepositoryProtectedTagActionBodyDto>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): BatchUpdateProtectedTagsBodyDto {
        this['names'] = names;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedTagActionBodyDto>): BatchUpdateProtectedTagsBodyDto {
        this['actions'] = actions;
        return this;
    }
}