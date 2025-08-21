

export class UserGroupDto {
    public id?: number;
    public name?: string;
    private 'user_group_id'?: string;
    private 'project_id'?: string;
    private 'tenant_id'?: string;
    private 'group_type'?: string;
    private 'member_count'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): UserGroupDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserGroupDto {
        this['name'] = name;
        return this;
    }
    public withUserGroupId(userGroupId: string): UserGroupDto {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withProjectId(projectId: string): UserGroupDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): UserGroupDto {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGroupType(groupType: string): UserGroupDto {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withMemberCount(memberCount: number): UserGroupDto {
        this['member_count'] = memberCount;
        return this;
    }
    public set memberCount(memberCount: number  | undefined) {
        this['member_count'] = memberCount;
    }
    public get memberCount(): number | undefined {
        return this['member_count'];
    }
    public withCreatedAt(createdAt: string): UserGroupDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UserGroupDto {
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