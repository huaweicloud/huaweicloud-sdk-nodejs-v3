import { ResourceTag } from './ResourceTag';
import { SecurityGroup } from './SecurityGroup';
import { SecurityGroupRule } from './SecurityGroupRule';


export class SecurityGroupInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    private 'security_group_rules'?: Array<SecurityGroupRule>;
    public constructor(id?: string, name?: string, description?: string, projectId?: string, createdAt?: Date, updatedAt?: Date, enterpriseProjectId?: string, tags?: Array<ResourceTag>, securityGroupRules?: Array<SecurityGroupRule>) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tags'] = tags;
        this['security_group_rules'] = securityGroupRules;
    }
    public withId(id: string): SecurityGroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecurityGroupInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SecurityGroupInfo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): SecurityGroupInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): SecurityGroupInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): SecurityGroupInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SecurityGroupInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): SecurityGroupInfo {
        this['tags'] = tags;
        return this;
    }
    public withSecurityGroupRules(securityGroupRules: Array<SecurityGroupRule>): SecurityGroupInfo {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<SecurityGroupRule>  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): Array<SecurityGroupRule> | undefined {
        return this['security_group_rules'];
    }
}