

export class PermissionHostDetail {
    private 'can_view'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_add_host'?: boolean;
    private 'can_connection_test'?: boolean;
    public constructor() { 
    }
    public withCanView(canView: boolean): PermissionHostDetail {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): PermissionHostDetail {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): PermissionHostDetail {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanAddHost(canAddHost: boolean): PermissionHostDetail {
        this['can_add_host'] = canAddHost;
        return this;
    }
    public set canAddHost(canAddHost: boolean  | undefined) {
        this['can_add_host'] = canAddHost;
    }
    public get canAddHost(): boolean | undefined {
        return this['can_add_host'];
    }
    public withCanConnectionTest(canConnectionTest: boolean): PermissionHostDetail {
        this['can_connection_test'] = canConnectionTest;
        return this;
    }
    public set canConnectionTest(canConnectionTest: boolean  | undefined) {
        this['can_connection_test'] = canConnectionTest;
    }
    public get canConnectionTest(): boolean | undefined {
        return this['can_connection_test'];
    }
}