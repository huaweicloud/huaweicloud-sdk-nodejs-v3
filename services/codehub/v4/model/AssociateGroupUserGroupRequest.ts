

export class AssociateGroupUserGroupRequest {
    private 'project_id'?: string;
    private 'group_id'?: number;
    private 'user_group_id'?: string;
    public constructor(projectId?: string, groupId?: number, userGroupId?: string) { 
        this['project_id'] = projectId;
        this['group_id'] = groupId;
        this['user_group_id'] = userGroupId;
    }
    public withProjectId(projectId: string): AssociateGroupUserGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: number): AssociateGroupUserGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withUserGroupId(userGroupId: string): AssociateGroupUserGroupRequest {
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