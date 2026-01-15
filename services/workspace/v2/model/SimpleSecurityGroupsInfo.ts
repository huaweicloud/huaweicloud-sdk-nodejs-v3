

export class SimpleSecurityGroupsInfo {
    public description?: string;
    public name?: string;
    public id?: string;
    private 'security_group_rules'?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withDescription(description: string): SimpleSecurityGroupsInfo {
        this['description'] = description;
        return this;
    }
    public withName(name: string): SimpleSecurityGroupsInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SimpleSecurityGroupsInfo {
        this['id'] = id;
        return this;
    }
    public withSecurityGroupRules(securityGroupRules: string): SimpleSecurityGroupsInfo {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: string  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): string | undefined {
        return this['security_group_rules'];
    }
    public withTenantId(tenantId: string): SimpleSecurityGroupsInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): SimpleSecurityGroupsInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): SimpleSecurityGroupsInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SimpleSecurityGroupsInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}