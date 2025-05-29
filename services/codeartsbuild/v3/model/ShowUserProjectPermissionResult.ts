

export class ShowUserProjectPermissionResult {
    private 'project_id'?: string;
    private 'create_permission'?: boolean;
    private 'modify_permission'?: boolean;
    private 'group_permission'?: boolean;
    private 'role_id'?: string;
    private 'role_name'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): ShowUserProjectPermissionResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatePermission(createPermission: boolean): ShowUserProjectPermissionResult {
        this['create_permission'] = createPermission;
        return this;
    }
    public set createPermission(createPermission: boolean  | undefined) {
        this['create_permission'] = createPermission;
    }
    public get createPermission(): boolean | undefined {
        return this['create_permission'];
    }
    public withModifyPermission(modifyPermission: boolean): ShowUserProjectPermissionResult {
        this['modify_permission'] = modifyPermission;
        return this;
    }
    public set modifyPermission(modifyPermission: boolean  | undefined) {
        this['modify_permission'] = modifyPermission;
    }
    public get modifyPermission(): boolean | undefined {
        return this['modify_permission'];
    }
    public withGroupPermission(groupPermission: boolean): ShowUserProjectPermissionResult {
        this['group_permission'] = groupPermission;
        return this;
    }
    public set groupPermission(groupPermission: boolean  | undefined) {
        this['group_permission'] = groupPermission;
    }
    public get groupPermission(): boolean | undefined {
        return this['group_permission'];
    }
    public withRoleId(roleId: string): ShowUserProjectPermissionResult {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): ShowUserProjectPermissionResult {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
}