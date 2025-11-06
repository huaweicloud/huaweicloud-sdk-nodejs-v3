

export class AssociateRepositoryUserGroupRequest {
    private 'project_id'?: string;
    private 'repository_id'?: number;
    private 'user_group_id'?: string;
    public constructor(projectId?: string, repositoryId?: number, userGroupId?: string) { 
        this['project_id'] = projectId;
        this['repository_id'] = repositoryId;
        this['user_group_id'] = userGroupId;
    }
    public withProjectId(projectId: string): AssociateRepositoryUserGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRepositoryId(repositoryId: number): AssociateRepositoryUserGroupRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withUserGroupId(userGroupId: string): AssociateRepositoryUserGroupRequest {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
}