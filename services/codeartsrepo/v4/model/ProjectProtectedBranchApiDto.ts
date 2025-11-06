import { ProjectProtectedActionResultApiDto } from './ProjectProtectedActionResultApiDto';


export class ProjectProtectedBranchApiDto {
    public id?: number;
    public name?: string;
    public actions?: Array<ProjectProtectedActionResultApiDto>;
    public constructor() { 
    }
    public withId(id: number): ProjectProtectedBranchApiDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProjectProtectedBranchApiDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedActionResultApiDto>): ProjectProtectedBranchApiDto {
        this['actions'] = actions;
        return this;
    }
}