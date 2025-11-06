import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';


export class RepositoryProtectedTagDto {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
    }
    public withId(id: number): RepositoryProtectedTagDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryProtectedTagDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): RepositoryProtectedTagDto {
        this['actions'] = actions;
        return this;
    }
}