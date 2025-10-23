

export class ProjectUserGroupDto {
    public id?: number;
    private 'user_group_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'tenant_id'?: string;
    private 'group_type'?: string;
    private 'member_count'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: number): ProjectUserGroupDto {
        this['id'] = id;
        return this;
    }
    public withUserGroupId(userGroupId: string): ProjectUserGroupDto {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withName(name: string): ProjectUserGroupDto {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ProjectUserGroupDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): ProjectUserGroupDto {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGroupType(groupType: string): ProjectUserGroupDto {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withMemberCount(memberCount: number): ProjectUserGroupDto {
        this['member_count'] = memberCount;
        return this;
    }
    public set memberCount(memberCount: number  | undefined) {
        this['member_count'] = memberCount;
    }
    public get memberCount(): number | undefined {
        return this['member_count'];
    }
    public withCreatedAt(createdAt: string): ProjectUserGroupDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ProjectUserGroupDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): ProjectUserGroupDto {
        this['description'] = description;
        return this;
    }
}