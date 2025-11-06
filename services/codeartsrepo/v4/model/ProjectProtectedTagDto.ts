import { ProjectProtectedTagActionDto } from './ProjectProtectedTagActionDto';


export class ProjectProtectedTagDto {
    public name?: string;
    public actions?: Array<ProjectProtectedTagActionDto>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ProjectProtectedTagDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedTagActionDto>): ProjectProtectedTagDto {
        this['actions'] = actions;
        return this;
    }
}