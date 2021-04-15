import { NeutronSecurityGroupRule } from './NeutronSecurityGroupRule';


export class NeutronSecurityGroup {
    public description: string;
    public id: string;
    public name: string;
    private 'security_group_rules': Array<NeutronSecurityGroupRule> | undefined;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(description?: any, id?: any, name?: any, securityGroupRules?: any, tenantId?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
        this['description'] = description;
        this['id'] = id;
        this['name'] = name;
        this['security_group_rules'] = securityGroupRules;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withDescription(description: string): NeutronSecurityGroup {
        this['description'] = description;
        return this;
    }
    public withId(id: string): NeutronSecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronSecurityGroup {
        this['name'] = name;
        return this;
    }
    public withSecurityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule>): NeutronSecurityGroup {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule> | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules() {
        return this['security_group_rules'];
    }
    public withTenantId(tenantId: string): NeutronSecurityGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronSecurityGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronSecurityGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronSecurityGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}