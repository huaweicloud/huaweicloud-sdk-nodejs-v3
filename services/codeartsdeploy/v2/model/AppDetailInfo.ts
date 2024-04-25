import { TaskV2Info } from './TaskV2Info';


export class AppDetailInfo {
    public id?: string;
    public name?: string;
    public region?: string;
    public description?: string;
    private 'is_disable'?: boolean;
    private 'create_type'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'slave_cluster_id'?: string;
    private 'is_care'?: boolean;
    private 'can_modify'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_view'?: boolean;
    private 'can_execute'?: boolean;
    private 'can_copy'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_create_env'?: boolean;
    private 'can_disable'?: boolean;
    private 'owner_tenant_id'?: string;
    private 'create_user_id'?: string;
    private 'create_tenant_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'permission_level'?: string;
    private 'arrange_infos'?: Array<TaskV2Info>;
    public constructor() { 
    }
    public withId(id: string): AppDetailInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppDetailInfo {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): AppDetailInfo {
        this['region'] = region;
        return this;
    }
    public withDescription(description: string): AppDetailInfo {
        this['description'] = description;
        return this;
    }
    public withIsDisable(isDisable: boolean): AppDetailInfo {
        this['is_disable'] = isDisable;
        return this;
    }
    public set isDisable(isDisable: boolean  | undefined) {
        this['is_disable'] = isDisable;
    }
    public get isDisable(): boolean | undefined {
        return this['is_disable'];
    }
    public withCreateType(createType: string): AppDetailInfo {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: string  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): string | undefined {
        return this['create_type'];
    }
    public withProjectId(projectId: string): AppDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): AppDetailInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withSlaveClusterId(slaveClusterId: string): AppDetailInfo {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withIsCare(isCare: boolean): AppDetailInfo {
        this['is_care'] = isCare;
        return this;
    }
    public set isCare(isCare: boolean  | undefined) {
        this['is_care'] = isCare;
    }
    public get isCare(): boolean | undefined {
        return this['is_care'];
    }
    public withCanModify(canModify: boolean): AppDetailInfo {
        this['can_modify'] = canModify;
        return this;
    }
    public set canModify(canModify: boolean  | undefined) {
        this['can_modify'] = canModify;
    }
    public get canModify(): boolean | undefined {
        return this['can_modify'];
    }
    public withCanDelete(canDelete: boolean): AppDetailInfo {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanView(canView: boolean): AppDetailInfo {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanExecute(canExecute: boolean): AppDetailInfo {
        this['can_execute'] = canExecute;
        return this;
    }
    public set canExecute(canExecute: boolean  | undefined) {
        this['can_execute'] = canExecute;
    }
    public get canExecute(): boolean | undefined {
        return this['can_execute'];
    }
    public withCanCopy(canCopy: boolean): AppDetailInfo {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCanManage(canManage: boolean): AppDetailInfo {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCreateEnv(canCreateEnv: boolean): AppDetailInfo {
        this['can_create_env'] = canCreateEnv;
        return this;
    }
    public set canCreateEnv(canCreateEnv: boolean  | undefined) {
        this['can_create_env'] = canCreateEnv;
    }
    public get canCreateEnv(): boolean | undefined {
        return this['can_create_env'];
    }
    public withCanDisable(canDisable: boolean): AppDetailInfo {
        this['can_disable'] = canDisable;
        return this;
    }
    public set canDisable(canDisable: boolean  | undefined) {
        this['can_disable'] = canDisable;
    }
    public get canDisable(): boolean | undefined {
        return this['can_disable'];
    }
    public withOwnerTenantId(ownerTenantId: string): AppDetailInfo {
        this['owner_tenant_id'] = ownerTenantId;
        return this;
    }
    public set ownerTenantId(ownerTenantId: string  | undefined) {
        this['owner_tenant_id'] = ownerTenantId;
    }
    public get ownerTenantId(): string | undefined {
        return this['owner_tenant_id'];
    }
    public withCreateUserId(createUserId: string): AppDetailInfo {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withCreateTenantId(createTenantId: string): AppDetailInfo {
        this['create_tenant_id'] = createTenantId;
        return this;
    }
    public set createTenantId(createTenantId: string  | undefined) {
        this['create_tenant_id'] = createTenantId;
    }
    public get createTenantId(): string | undefined {
        return this['create_tenant_id'];
    }
    public withCreateTime(createTime: string): AppDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): AppDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withPermissionLevel(permissionLevel: string): AppDetailInfo {
        this['permission_level'] = permissionLevel;
        return this;
    }
    public set permissionLevel(permissionLevel: string  | undefined) {
        this['permission_level'] = permissionLevel;
    }
    public get permissionLevel(): string | undefined {
        return this['permission_level'];
    }
    public withArrangeInfos(arrangeInfos: Array<TaskV2Info>): AppDetailInfo {
        this['arrange_infos'] = arrangeInfos;
        return this;
    }
    public set arrangeInfos(arrangeInfos: Array<TaskV2Info>  | undefined) {
        this['arrange_infos'] = arrangeInfos;
    }
    public get arrangeInfos(): Array<TaskV2Info> | undefined {
        return this['arrange_infos'];
    }
}