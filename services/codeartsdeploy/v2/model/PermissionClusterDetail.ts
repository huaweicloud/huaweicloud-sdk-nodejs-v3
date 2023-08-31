

export class PermissionClusterDetail {
    private 'can_view'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_add_host'?: boolean;
    private 'can_manage'?: boolean;
    public constructor() { 
    }
    public withCanView(canView: boolean): PermissionClusterDetail {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): PermissionClusterDetail {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): PermissionClusterDetail {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanAddHost(canAddHost: boolean): PermissionClusterDetail {
        this['can_add_host'] = canAddHost;
        return this;
    }
    public set canAddHost(canAddHost: boolean  | undefined) {
        this['can_add_host'] = canAddHost;
    }
    public get canAddHost(): boolean | undefined {
        return this['can_add_host'];
    }
    public withCanManage(canManage: boolean): PermissionClusterDetail {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
}