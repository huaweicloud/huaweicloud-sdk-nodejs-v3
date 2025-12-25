import { HwcSubnetSecurityGroupRule } from './HwcSubnetSecurityGroupRule';


export class HwcSubnet {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'enterprise_project_id'?: string;
    private 'security_group_rules'?: Array<HwcSubnetSecurityGroupRule>;
    public constructor(id?: string, name?: string, projectId?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): HwcSubnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcSubnet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): HwcSubnet {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): HwcSubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): HwcSubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): HwcSubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HwcSubnet {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSecurityGroupRules(securityGroupRules: Array<HwcSubnetSecurityGroupRule>): HwcSubnet {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<HwcSubnetSecurityGroupRule>  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): Array<HwcSubnetSecurityGroupRule> | undefined {
        return this['security_group_rules'];
    }
}