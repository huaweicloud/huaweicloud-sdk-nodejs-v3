

export class ListSecurityPermissionSetsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'parent_id'?: string;
    private 'type_filter'?: ListSecurityPermissionSetsRequestTypeFilterEnum | string;
    private 'manager_id'?: string;
    private 'manager_name'?: string;
    private 'manager_type'?: ListSecurityPermissionSetsRequestManagerTypeEnum | string;
    private 'datasource_type'?: ListSecurityPermissionSetsRequestDatasourceTypeEnum | string;
    private 'sync_status'?: ListSecurityPermissionSetsRequestSyncStatusEnum | string;
    private 'order_by'?: ListSecurityPermissionSetsRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityPermissionSetsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityPermissionSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityPermissionSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListSecurityPermissionSetsRequest {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): ListSecurityPermissionSetsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withTypeFilter(typeFilter: ListSecurityPermissionSetsRequestTypeFilterEnum | string): ListSecurityPermissionSetsRequest {
        this['type_filter'] = typeFilter;
        return this;
    }
    public set typeFilter(typeFilter: ListSecurityPermissionSetsRequestTypeFilterEnum | string  | undefined) {
        this['type_filter'] = typeFilter;
    }
    public get typeFilter(): ListSecurityPermissionSetsRequestTypeFilterEnum | string | undefined {
        return this['type_filter'];
    }
    public withManagerId(managerId: string): ListSecurityPermissionSetsRequest {
        this['manager_id'] = managerId;
        return this;
    }
    public set managerId(managerId: string  | undefined) {
        this['manager_id'] = managerId;
    }
    public get managerId(): string | undefined {
        return this['manager_id'];
    }
    public withManagerName(managerName: string): ListSecurityPermissionSetsRequest {
        this['manager_name'] = managerName;
        return this;
    }
    public set managerName(managerName: string  | undefined) {
        this['manager_name'] = managerName;
    }
    public get managerName(): string | undefined {
        return this['manager_name'];
    }
    public withManagerType(managerType: ListSecurityPermissionSetsRequestManagerTypeEnum | string): ListSecurityPermissionSetsRequest {
        this['manager_type'] = managerType;
        return this;
    }
    public set managerType(managerType: ListSecurityPermissionSetsRequestManagerTypeEnum | string  | undefined) {
        this['manager_type'] = managerType;
    }
    public get managerType(): ListSecurityPermissionSetsRequestManagerTypeEnum | string | undefined {
        return this['manager_type'];
    }
    public withDatasourceType(datasourceType: ListSecurityPermissionSetsRequestDatasourceTypeEnum | string): ListSecurityPermissionSetsRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityPermissionSetsRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityPermissionSetsRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withSyncStatus(syncStatus: ListSecurityPermissionSetsRequestSyncStatusEnum | string): ListSecurityPermissionSetsRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListSecurityPermissionSetsRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListSecurityPermissionSetsRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withOrderBy(orderBy: ListSecurityPermissionSetsRequestOrderByEnum | string): ListSecurityPermissionSetsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityPermissionSetsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityPermissionSetsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityPermissionSetsRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetsRequestTypeFilterEnum {
    TOP_PERMISSION_SET = 'TOP_PERMISSION_SET',
    SUB_PERMISSION_SET = 'SUB_PERMISSION_SET',
    ALL_PERMISSION_SET = 'ALL_PERMISSION_SET'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetsRequestManagerTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetsRequestDatasourceTypeEnum {
    HIVE = 'HIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetsRequestSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetsRequestOrderByEnum {
    NAME = 'NAME',
    CREATE_TIME = 'CREATE_TIME',
    UPDATE_TIME = 'UPDATE_TIME'
}
