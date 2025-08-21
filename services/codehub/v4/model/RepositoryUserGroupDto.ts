

export class RepositoryUserGroupDto {
    private 'user_group_name'?: string;
    private 'user_group_id'?: string;
    private 'project_id'?: string;
    private 'user_count'?: string;
    public description?: string;
    public constructor() { 
    }
    public withUserGroupName(userGroupName: string): RepositoryUserGroupDto {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withUserGroupId(userGroupId: string): RepositoryUserGroupDto {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withProjectId(projectId: string): RepositoryUserGroupDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUserCount(userCount: string): RepositoryUserGroupDto {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: string  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): string | undefined {
        return this['user_count'];
    }
    public withDescription(description: string): RepositoryUserGroupDto {
        this['description'] = description;
        return this;
    }
}