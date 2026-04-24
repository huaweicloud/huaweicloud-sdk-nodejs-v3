

export class KeystoneCheckProjectPermissionForGroupRequest {
    private 'project_id'?: string;
    private 'group_id'?: string;
    private 'role_id'?: string;
    public constructor(projectId?: string, groupId?: string, roleId?: string) { 
        this['project_id'] = projectId;
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withProjectId(projectId: string): KeystoneCheckProjectPermissionForGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: string): KeystoneCheckProjectPermissionForGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRoleId(roleId: string): KeystoneCheckProjectPermissionForGroupRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
}