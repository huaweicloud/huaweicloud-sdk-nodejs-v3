import { ProjectProtectedActionResultDto } from './ProjectProtectedActionResultDto';


export class ProjectProtectedTagPo {
    public id?: number;
    public source?: string;
    private 'project_id'?: string;
    private 'updated_at'?: string;
    public name?: string;
    public actions?: Array<ProjectProtectedActionResultDto>;
    public constructor() { 
    }
    public withId(id: number): ProjectProtectedTagPo {
        this['id'] = id;
        return this;
    }
    public withSource(source: string): ProjectProtectedTagPo {
        this['source'] = source;
        return this;
    }
    public withProjectId(projectId: string): ProjectProtectedTagPo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdatedAt(updatedAt: string): ProjectProtectedTagPo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withName(name: string): ProjectProtectedTagPo {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedActionResultDto>): ProjectProtectedTagPo {
        this['actions'] = actions;
        return this;
    }
}