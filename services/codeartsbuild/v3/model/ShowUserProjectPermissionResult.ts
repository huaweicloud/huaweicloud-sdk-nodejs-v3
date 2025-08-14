

export class ShowUserProjectPermissionResult {
    private 'project_id'?: string;
    private 'create_permission'?: boolean;
    private 'modify_permission'?: boolean;
    private 'group_permission'?: boolean;
    private 'delete_permission'?: boolean;
    private 'view_permission'?: boolean;
    private 'execute_permission'?: boolean;
    private 'copy_permission'?: boolean;
    private 'forbidden_permission'?: boolean;
    private 'manager_permission'?: boolean;
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'role_ids'?: Array<string>;
    private 'role_names'?: Array<string>;
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
    public withDeletePermission(deletePermission: boolean): ShowUserProjectPermissionResult {
        this['delete_permission'] = deletePermission;
        return this;
    }
    public set deletePermission(deletePermission: boolean  | undefined) {
        this['delete_permission'] = deletePermission;
    }
    public get deletePermission(): boolean | undefined {
        return this['delete_permission'];
    }
    public withViewPermission(viewPermission: boolean): ShowUserProjectPermissionResult {
        this['view_permission'] = viewPermission;
        return this;
    }
    public set viewPermission(viewPermission: boolean  | undefined) {
        this['view_permission'] = viewPermission;
    }
    public get viewPermission(): boolean | undefined {
        return this['view_permission'];
    }
    public withExecutePermission(executePermission: boolean): ShowUserProjectPermissionResult {
        this['execute_permission'] = executePermission;
        return this;
    }
    public set executePermission(executePermission: boolean  | undefined) {
        this['execute_permission'] = executePermission;
    }
    public get executePermission(): boolean | undefined {
        return this['execute_permission'];
    }
    public withCopyPermission(copyPermission: boolean): ShowUserProjectPermissionResult {
        this['copy_permission'] = copyPermission;
        return this;
    }
    public set copyPermission(copyPermission: boolean  | undefined) {
        this['copy_permission'] = copyPermission;
    }
    public get copyPermission(): boolean | undefined {
        return this['copy_permission'];
    }
    public withForbiddenPermission(forbiddenPermission: boolean): ShowUserProjectPermissionResult {
        this['forbidden_permission'] = forbiddenPermission;
        return this;
    }
    public set forbiddenPermission(forbiddenPermission: boolean  | undefined) {
        this['forbidden_permission'] = forbiddenPermission;
    }
    public get forbiddenPermission(): boolean | undefined {
        return this['forbidden_permission'];
    }
    public withManagerPermission(managerPermission: boolean): ShowUserProjectPermissionResult {
        this['manager_permission'] = managerPermission;
        return this;
    }
    public set managerPermission(managerPermission: boolean  | undefined) {
        this['manager_permission'] = managerPermission;
    }
    public get managerPermission(): boolean | undefined {
        return this['manager_permission'];
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
    public withRoleIds(roleIds: Array<string>): ShowUserProjectPermissionResult {
        this['role_ids'] = roleIds;
        return this;
    }
    public set roleIds(roleIds: Array<string>  | undefined) {
        this['role_ids'] = roleIds;
    }
    public get roleIds(): Array<string> | undefined {
        return this['role_ids'];
    }
    public withRoleNames(roleNames: Array<string>): ShowUserProjectPermissionResult {
        this['role_names'] = roleNames;
        return this;
    }
    public set roleNames(roleNames: Array<string>  | undefined) {
        this['role_names'] = roleNames;
    }
    public get roleNames(): Array<string> | undefined {
        return this['role_names'];
    }
}