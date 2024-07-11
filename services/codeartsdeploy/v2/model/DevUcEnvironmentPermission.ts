

export class DevUcEnvironmentPermission {
    public id?: number;
    private 'role_id'?: string;
    private 'devuc_role_id_list'?: Array<string>;
    private 'role_type'?: DevUcEnvironmentPermissionRoleTypeEnum | string;
    public name?: string;
    public region?: string;
    private 'environment_id'?: string;
    private 'can_view'?: boolean;
    private 'can_edit'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_deploy'?: boolean;
    private 'can_manage'?: boolean;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: number): DevUcEnvironmentPermission {
        this['id'] = id;
        return this;
    }
    public withRoleId(roleId: string): DevUcEnvironmentPermission {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withDevucRoleIdList(devucRoleIdList: Array<string>): DevUcEnvironmentPermission {
        this['devuc_role_id_list'] = devucRoleIdList;
        return this;
    }
    public set devucRoleIdList(devucRoleIdList: Array<string>  | undefined) {
        this['devuc_role_id_list'] = devucRoleIdList;
    }
    public get devucRoleIdList(): Array<string> | undefined {
        return this['devuc_role_id_list'];
    }
    public withRoleType(roleType: DevUcEnvironmentPermissionRoleTypeEnum | string): DevUcEnvironmentPermission {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: DevUcEnvironmentPermissionRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): DevUcEnvironmentPermissionRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
    public withName(name: string): DevUcEnvironmentPermission {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): DevUcEnvironmentPermission {
        this['region'] = region;
        return this;
    }
    public withEnvironmentId(environmentId: string): DevUcEnvironmentPermission {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withCanView(canView: boolean): DevUcEnvironmentPermission {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanEdit(canEdit: boolean): DevUcEnvironmentPermission {
        this['can_edit'] = canEdit;
        return this;
    }
    public set canEdit(canEdit: boolean  | undefined) {
        this['can_edit'] = canEdit;
    }
    public get canEdit(): boolean | undefined {
        return this['can_edit'];
    }
    public withCanDelete(canDelete: boolean): DevUcEnvironmentPermission {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanDeploy(canDeploy: boolean): DevUcEnvironmentPermission {
        this['can_deploy'] = canDeploy;
        return this;
    }
    public set canDeploy(canDeploy: boolean  | undefined) {
        this['can_deploy'] = canDeploy;
    }
    public get canDeploy(): boolean | undefined {
        return this['can_deploy'];
    }
    public withCanManage(canManage: boolean): DevUcEnvironmentPermission {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCreateTime(createTime: Date): DevUcEnvironmentPermission {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DevUcEnvironmentPermission {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DevUcEnvironmentPermissionRoleTypeEnum {
    ENVIRONMENT_CREATOR = 'environment-creator',
    PROJECT = 'project',
    TEMPLATE_CUSTOMIZED_INST = 'template-customized-inst',
    TEMPLATE_PROJECT_CUSTOMIZED = 'template-project-customized',
    PROJECT_CUSTOMIZED = 'project-customized'
}
