

export class PermissionGroupDetail {
    private 'can_view'?: boolean | undefined;
    private 'can_edit'?: boolean | undefined;
    private 'can_delete'?: boolean | undefined;
    private 'can_add_host'?: boolean | undefined;
    private 'can_manage'?: boolean | undefined;
    public constructor() { 
    }
    public withCanView(canView: boolean): PermissionGroupDetail {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean | undefined) {
        this['can_view'] = canView;
    }
    public get canView() {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): PermissionGroupDetail {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit() {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): PermissionGroupDetail {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete() {
        return this['can_delete'];
    }
    public withCanAddHost(canAddHost: boolean): PermissionGroupDetail {
        this['can_add_host'] = canAddHost;
        return this;
    }
    public set canAddHost(canAddHost: boolean | undefined) {
        this['can_add_host'] = canAddHost;
    }
    public get canAddHost() {
        return this['can_add_host'];
    }
    public withCanManage(canManage: boolean): PermissionGroupDetail {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage() {
        return this['can_manage'];
    }
}