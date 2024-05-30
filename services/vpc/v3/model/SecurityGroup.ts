import { ResourceTag } from './ResourceTag';


export class SecurityGroup {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(id?: string, name?: string, description?: string, projectId?: string, createdAt?: Date, updatedAt?: Date, enterpriseProjectId?: string, tags?: Array<ResourceTag>) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tags'] = tags;
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecurityGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SecurityGroup {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): SecurityGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): SecurityGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): SecurityGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SecurityGroup {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): SecurityGroup {
        this['tags'] = tags;
        return this;
    }
}