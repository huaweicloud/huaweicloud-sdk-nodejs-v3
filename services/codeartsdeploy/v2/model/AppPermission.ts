

export class AppPermission {
    private 'dev_role_id'?: string;
    private 'can_modify'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_view'?: boolean;
    private 'can_execute'?: boolean;
    private 'can_copy'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_create_env'?: boolean;
    private 'can_disable'?: boolean;
    public constructor(devRoleId?: string, canModify?: boolean, canDelete?: boolean, canView?: boolean, canExecute?: boolean, canCopy?: boolean, canManage?: boolean, canCreateEnv?: boolean, canDisable?: boolean) { 
        this['dev_role_id'] = devRoleId;
        this['can_modify'] = canModify;
        this['can_delete'] = canDelete;
        this['can_view'] = canView;
        this['can_execute'] = canExecute;
        this['can_copy'] = canCopy;
        this['can_manage'] = canManage;
        this['can_create_env'] = canCreateEnv;
        this['can_disable'] = canDisable;
    }
    public withDevRoleId(devRoleId: string): AppPermission {
        this['dev_role_id'] = devRoleId;
        return this;
    }
    public set devRoleId(devRoleId: string  | undefined) {
        this['dev_role_id'] = devRoleId;
    }
    public get devRoleId(): string | undefined {
        return this['dev_role_id'];
    }
    public withCanModify(canModify: boolean): AppPermission {
        this['can_modify'] = canModify;
        return this;
    }
    public set canModify(canModify: boolean  | undefined) {
        this['can_modify'] = canModify;
    }
    public get canModify(): boolean | undefined {
        return this['can_modify'];
    }
    public withCanDelete(canDelete: boolean): AppPermission {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanView(canView: boolean): AppPermission {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanExecute(canExecute: boolean): AppPermission {
        this['can_execute'] = canExecute;
        return this;
    }
    public set canExecute(canExecute: boolean  | undefined) {
        this['can_execute'] = canExecute;
    }
    public get canExecute(): boolean | undefined {
        return this['can_execute'];
    }
    public withCanCopy(canCopy: boolean): AppPermission {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCanManage(canManage: boolean): AppPermission {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCreateEnv(canCreateEnv: boolean): AppPermission {
        this['can_create_env'] = canCreateEnv;
        return this;
    }
    public set canCreateEnv(canCreateEnv: boolean  | undefined) {
        this['can_create_env'] = canCreateEnv;
    }
    public get canCreateEnv(): boolean | undefined {
        return this['can_create_env'];
    }
    public withCanDisable(canDisable: boolean): AppPermission {
        this['can_disable'] = canDisable;
        return this;
    }
    public set canDisable(canDisable: boolean  | undefined) {
        this['can_disable'] = canDisable;
    }
    public get canDisable(): boolean | undefined {
        return this['can_disable'];
    }
}