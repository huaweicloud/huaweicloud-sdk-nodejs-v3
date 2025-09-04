

export class JobRolePermission {
    public id?: number;
    private 'role_id'?: number;
    private 'devuc_role_id'?: string;
    private 'role_name'?: string;
    private 'is_modify'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_view'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_copy'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'is_manager'?: boolean;
    public count?: number;
    public constructor() { 
    }
    public withId(id: number): JobRolePermission {
        this['id'] = id;
        return this;
    }
    public withRoleId(roleId: number): JobRolePermission {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withDevucRoleId(devucRoleId: string): JobRolePermission {
        this['devuc_role_id'] = devucRoleId;
        return this;
    }
    public set devucRoleId(devucRoleId: string  | undefined) {
        this['devuc_role_id'] = devucRoleId;
    }
    public get devucRoleId(): string | undefined {
        return this['devuc_role_id'];
    }
    public withRoleName(roleName: string): JobRolePermission {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withIsModify(isModify: boolean): JobRolePermission {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsDelete(isDelete: boolean): JobRolePermission {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsView(isView: boolean): JobRolePermission {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withIsExecute(isExecute: boolean): JobRolePermission {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsCopy(isCopy: boolean): JobRolePermission {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsForbidden(isForbidden: boolean): JobRolePermission {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withIsManager(isManager: boolean): JobRolePermission {
        this['is_manager'] = isManager;
        return this;
    }
    public set isManager(isManager: boolean  | undefined) {
        this['is_manager'] = isManager;
    }
    public get isManager(): boolean | undefined {
        return this['is_manager'];
    }
    public withCount(count: number): JobRolePermission {
        this['count'] = count;
        return this;
    }
}