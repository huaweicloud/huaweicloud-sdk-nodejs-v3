import { User } from './User';


export class Project {
    private 'project_num_id'?: number;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'created_time'?: number;
    private 'updated_time'?: number;
    private 'project_code'?: string;
    public region?: string;
    private 'is_archived'?: boolean;
    public type?: string;
    public creator?: User;
    public constructor() { 
    }
    public withProjectNumId(projectNumId: number): Project {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withProjectId(projectId: string): Project {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): Project {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Project {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: number): Project {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: number): Project {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withProjectCode(projectCode: string): Project {
        this['project_code'] = projectCode;
        return this;
    }
    public set projectCode(projectCode: string  | undefined) {
        this['project_code'] = projectCode;
    }
    public get projectCode(): string | undefined {
        return this['project_code'];
    }
    public withRegion(region: string): Project {
        this['region'] = region;
        return this;
    }
    public withIsArchived(isArchived: boolean): Project {
        this['is_archived'] = isArchived;
        return this;
    }
    public set isArchived(isArchived: boolean  | undefined) {
        this['is_archived'] = isArchived;
    }
    public get isArchived(): boolean | undefined {
        return this['is_archived'];
    }
    public withType(type: string): Project {
        this['type'] = type;
        return this;
    }
    public withCreator(creator: User): Project {
        this['creator'] = creator;
        return this;
    }
}