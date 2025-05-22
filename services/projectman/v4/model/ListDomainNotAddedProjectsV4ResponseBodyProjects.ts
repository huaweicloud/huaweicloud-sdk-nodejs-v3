import { ListDomainNotAddedProjectsV4ResponseBodyCreator } from './ListDomainNotAddedProjectsV4ResponseBodyCreator';


export class ListDomainNotAddedProjectsV4ResponseBodyProjects {
    private 'project_num_id'?: number;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public description?: string;
    private 'created_time'?: number;
    private 'updated_time'?: number;
    private 'project_type'?: string;
    public creator?: ListDomainNotAddedProjectsV4ResponseBodyCreator;
    public constructor() { 
    }
    public withProjectNumId(projectNumId: number): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withProjectId(projectId: string): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDescription(description: string): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: number): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: number): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withProjectType(projectType: string): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withCreator(creator: ListDomainNotAddedProjectsV4ResponseBodyCreator): ListDomainNotAddedProjectsV4ResponseBodyProjects {
        this['creator'] = creator;
        return this;
    }
}