import { ListProjectsV4ResponseBodyCreator } from './ListProjectsV4ResponseBodyCreator';


export class ListProjectsV4ResponseBodyProjects {
    private 'project_num_id'?: number;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public description?: string;
    private 'created_time'?: number;
    private 'updated_time'?: number;
    private 'project_type'?: string;
    public creator?: ListProjectsV4ResponseBodyCreator;
    public constructor() { 
    }
    public withProjectNumId(projectNumId: number): ListProjectsV4ResponseBodyProjects {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withProjectId(projectId: string): ListProjectsV4ResponseBodyProjects {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ListProjectsV4ResponseBodyProjects {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDescription(description: string): ListProjectsV4ResponseBodyProjects {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: number): ListProjectsV4ResponseBodyProjects {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: number): ListProjectsV4ResponseBodyProjects {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withProjectType(projectType: string): ListProjectsV4ResponseBodyProjects {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withCreator(creator: ListProjectsV4ResponseBodyCreator): ListProjectsV4ResponseBodyProjects {
        this['creator'] = creator;
        return this;
    }
}