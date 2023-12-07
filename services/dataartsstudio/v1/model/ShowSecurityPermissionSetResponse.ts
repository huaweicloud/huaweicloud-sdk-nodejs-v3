
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityPermissionSetResponse extends SdkResponse {
    public id?: string;
    private 'parent_id'?: string;
    public name?: string;
    public description?: string;
    public type?: ShowSecurityPermissionSetResponseTypeEnum | string;
    private 'managed_cluster_id'?: string;
    private 'managed_cluster_name'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'manager_id'?: string;
    private 'manager_name'?: string;
    private 'manager_type'?: string;
    private 'datasource_type'?: string;
    private 'sync_status'?: ShowSecurityPermissionSetResponseSyncStatusEnum | string;
    private 'sync_msg'?: string;
    private 'sync_time'?: number;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSecurityPermissionSetResponse {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): ShowSecurityPermissionSetResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withName(name: string): ShowSecurityPermissionSetResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowSecurityPermissionSetResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: ShowSecurityPermissionSetResponseTypeEnum | string): ShowSecurityPermissionSetResponse {
        this['type'] = type;
        return this;
    }
    public withManagedClusterId(managedClusterId: string): ShowSecurityPermissionSetResponse {
        this['managed_cluster_id'] = managedClusterId;
        return this;
    }
    public set managedClusterId(managedClusterId: string  | undefined) {
        this['managed_cluster_id'] = managedClusterId;
    }
    public get managedClusterId(): string | undefined {
        return this['managed_cluster_id'];
    }
    public withManagedClusterName(managedClusterName: string): ShowSecurityPermissionSetResponse {
        this['managed_cluster_name'] = managedClusterName;
        return this;
    }
    public set managedClusterName(managedClusterName: string  | undefined) {
        this['managed_cluster_name'] = managedClusterName;
    }
    public get managedClusterName(): string | undefined {
        return this['managed_cluster_name'];
    }
    public withProjectId(projectId: string): ShowSecurityPermissionSetResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ShowSecurityPermissionSetResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): ShowSecurityPermissionSetResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withManagerId(managerId: string): ShowSecurityPermissionSetResponse {
        this['manager_id'] = managerId;
        return this;
    }
    public set managerId(managerId: string  | undefined) {
        this['manager_id'] = managerId;
    }
    public get managerId(): string | undefined {
        return this['manager_id'];
    }
    public withManagerName(managerName: string): ShowSecurityPermissionSetResponse {
        this['manager_name'] = managerName;
        return this;
    }
    public set managerName(managerName: string  | undefined) {
        this['manager_name'] = managerName;
    }
    public get managerName(): string | undefined {
        return this['manager_name'];
    }
    public withManagerType(managerType: string): ShowSecurityPermissionSetResponse {
        this['manager_type'] = managerType;
        return this;
    }
    public set managerType(managerType: string  | undefined) {
        this['manager_type'] = managerType;
    }
    public get managerType(): string | undefined {
        return this['manager_type'];
    }
    public withDatasourceType(datasourceType: string): ShowSecurityPermissionSetResponse {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withSyncStatus(syncStatus: ShowSecurityPermissionSetResponseSyncStatusEnum | string): ShowSecurityPermissionSetResponse {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ShowSecurityPermissionSetResponseSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ShowSecurityPermissionSetResponseSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncMsg(syncMsg: string): ShowSecurityPermissionSetResponse {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
    public withSyncTime(syncTime: number): ShowSecurityPermissionSetResponse {
        this['sync_time'] = syncTime;
        return this;
    }
    public set syncTime(syncTime: number  | undefined) {
        this['sync_time'] = syncTime;
    }
    public get syncTime(): number | undefined {
        return this['sync_time'];
    }
    public withCreateTime(createTime: number): ShowSecurityPermissionSetResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ShowSecurityPermissionSetResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): ShowSecurityPermissionSetResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): ShowSecurityPermissionSetResponse {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityPermissionSetResponseTypeEnum {
    COMMON = 'COMMON',
    MRS_MANAGED = 'MRS_MANAGED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityPermissionSetResponseSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
