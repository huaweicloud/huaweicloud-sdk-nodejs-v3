

export class EnvironmentHostPermission {
    private 'can_delete'?: boolean;
    private 'can_deploy'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_view'?: boolean;
    public constructor() { 
    }
    public withCanDelete(canDelete: boolean): EnvironmentHostPermission {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanDeploy(canDeploy: boolean): EnvironmentHostPermission {
        this['can_deploy'] = canDeploy;
        return this;
    }
    public set canDeploy(canDeploy: boolean  | undefined) {
        this['can_deploy'] = canDeploy;
    }
    public get canDeploy(): boolean | undefined {
        return this['can_deploy'];
    }
    public withCanEdit(canEdit: boolean): EnvironmentHostPermission {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanManage(canManage: boolean): EnvironmentHostPermission {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanView(canView: boolean): EnvironmentHostPermission {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
}