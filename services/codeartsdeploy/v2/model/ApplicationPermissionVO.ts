

export class ApplicationPermissionVO {
    private 'can_modify'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_view'?: boolean;
    private 'can_execute'?: boolean;
    private 'can_copy'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_create_env'?: boolean;
    private 'can_disable'?: boolean;
    public name?: string;
    public region?: string;
    private 'role_id'?: string;
    private 'role_type'?: ApplicationPermissionVORoleTypeEnum | string;
    public constructor() { 
    }
    public withCanModify(canModify: boolean): ApplicationPermissionVO {
        this['can_modify'] = canModify;
        return this;
    }
    public set canModify(canModify: boolean  | undefined) {
        this['can_modify'] = canModify;
    }
    public get canModify(): boolean | undefined {
        return this['can_modify'];
    }
    public withCanDelete(canDelete: boolean): ApplicationPermissionVO {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanView(canView: boolean): ApplicationPermissionVO {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanExecute(canExecute: boolean): ApplicationPermissionVO {
        this['can_execute'] = canExecute;
        return this;
    }
    public set canExecute(canExecute: boolean  | undefined) {
        this['can_execute'] = canExecute;
    }
    public get canExecute(): boolean | undefined {
        return this['can_execute'];
    }
    public withCanCopy(canCopy: boolean): ApplicationPermissionVO {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCanManage(canManage: boolean): ApplicationPermissionVO {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCreateEnv(canCreateEnv: boolean): ApplicationPermissionVO {
        this['can_create_env'] = canCreateEnv;
        return this;
    }
    public set canCreateEnv(canCreateEnv: boolean  | undefined) {
        this['can_create_env'] = canCreateEnv;
    }
    public get canCreateEnv(): boolean | undefined {
        return this['can_create_env'];
    }
    public withCanDisable(canDisable: boolean): ApplicationPermissionVO {
        this['can_disable'] = canDisable;
        return this;
    }
    public set canDisable(canDisable: boolean  | undefined) {
        this['can_disable'] = canDisable;
    }
    public get canDisable(): boolean | undefined {
        return this['can_disable'];
    }
    public withName(name: string): ApplicationPermissionVO {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): ApplicationPermissionVO {
        this['region'] = region;
        return this;
    }
    public withRoleId(roleId: string): ApplicationPermissionVO {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleType(roleType: ApplicationPermissionVORoleTypeEnum | string): ApplicationPermissionVO {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: ApplicationPermissionVORoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): ApplicationPermissionVORoleTypeEnum | string | undefined {
        return this['role_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationPermissionVORoleTypeEnum {
    APP_CREATOR = 'app-creator',
    PROJECT = 'project',
    TEMPLATE_CUSTOMIZED_INST = 'template-customized-inst',
    TEMPLATE_PROJECT_CUSTOMIZED = 'template-project-customized',
    PROJECT_CUSTOMIZED = 'project-customized'
}
