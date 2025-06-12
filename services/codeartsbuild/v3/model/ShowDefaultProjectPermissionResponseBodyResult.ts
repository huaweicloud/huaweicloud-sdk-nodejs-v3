

export class ShowDefaultProjectPermissionResponseBodyResult {
    private 'role_id'?: number;
    private 'role_name'?: string;
    private 'is_copy'?: boolean;
    private 'is_delete'?: boolean;
    private 'is_execute'?: boolean;
    private 'is_forbidden'?: boolean;
    private 'is_manager'?: boolean;
    private 'is_modify'?: boolean;
    private 'is_view'?: boolean;
    public constructor() { 
    }
    public withRoleId(roleId: number): ShowDefaultProjectPermissionResponseBodyResult {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): ShowDefaultProjectPermissionResponseBodyResult {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withIsCopy(isCopy: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_copy'] = isCopy;
        return this;
    }
    public set isCopy(isCopy: boolean  | undefined) {
        this['is_copy'] = isCopy;
    }
    public get isCopy(): boolean | undefined {
        return this['is_copy'];
    }
    public withIsDelete(isDelete: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withIsExecute(isExecute: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withIsForbidden(isForbidden: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withIsManager(isManager: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_manager'] = isManager;
        return this;
    }
    public set isManager(isManager: boolean  | undefined) {
        this['is_manager'] = isManager;
    }
    public get isManager(): boolean | undefined {
        return this['is_manager'];
    }
    public withIsModify(isModify: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_modify'] = isModify;
        return this;
    }
    public set isModify(isModify: boolean  | undefined) {
        this['is_modify'] = isModify;
    }
    public get isModify(): boolean | undefined {
        return this['is_modify'];
    }
    public withIsView(isView: boolean): ShowDefaultProjectPermissionResponseBodyResult {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
}