import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';


export class RepositoryProtectedBranchDto {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
    }
    public withId(id: number): RepositoryProtectedBranchDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryProtectedBranchDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): RepositoryProtectedBranchDto {
        this['actions'] = actions;
        return this;
    }
}