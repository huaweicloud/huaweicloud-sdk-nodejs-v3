

export class PermissionHostDetailNew {
    private 'can_view'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_add_host'?: boolean;
    private 'can_copy'?: boolean;
    public constructor() { 
    }
    public withCanView(canView: boolean): PermissionHostDetailNew {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): PermissionHostDetailNew {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): PermissionHostDetailNew {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanAddHost(canAddHost: boolean): PermissionHostDetailNew {
        this['can_add_host'] = canAddHost;
        return this;
    }
    public set canAddHost(canAddHost: boolean  | undefined) {
        this['can_add_host'] = canAddHost;
    }
    public get canAddHost(): boolean | undefined {
        return this['can_add_host'];
    }
    public withCanCopy(canCopy: boolean): PermissionHostDetailNew {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
}