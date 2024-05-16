

export class ListSecurityMemberSyncTasksRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'cluster_type'?: ListSecurityMemberSyncTasksRequestClusterTypeEnum | string;
    private 'cluster_name'?: string;
    private 'sync_status'?: ListSecurityMemberSyncTasksRequestSyncStatusEnum | string;
    private 'schedule_status'?: ListSecurityMemberSyncTasksRequestScheduleStatusEnum | string;
    private 'order_by'?: ListSecurityMemberSyncTasksRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityMemberSyncTasksRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityMemberSyncTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityMemberSyncTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withClusterType(clusterType: ListSecurityMemberSyncTasksRequestClusterTypeEnum | string): ListSecurityMemberSyncTasksRequest {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: ListSecurityMemberSyncTasksRequestClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): ListSecurityMemberSyncTasksRequestClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterName(clusterName: string): ListSecurityMemberSyncTasksRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withSyncStatus(syncStatus: ListSecurityMemberSyncTasksRequestSyncStatusEnum | string): ListSecurityMemberSyncTasksRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListSecurityMemberSyncTasksRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListSecurityMemberSyncTasksRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withScheduleStatus(scheduleStatus: ListSecurityMemberSyncTasksRequestScheduleStatusEnum | string): ListSecurityMemberSyncTasksRequest {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: ListSecurityMemberSyncTasksRequestScheduleStatusEnum | string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): ListSecurityMemberSyncTasksRequestScheduleStatusEnum | string | undefined {
        return this['schedule_status'];
    }
    public withOrderBy(orderBy: ListSecurityMemberSyncTasksRequestOrderByEnum | string): ListSecurityMemberSyncTasksRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityMemberSyncTasksRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityMemberSyncTasksRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityMemberSyncTasksRequest {
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
export enum ListSecurityMemberSyncTasksRequestClusterTypeEnum {
    MRS = 'MRS',
    DWS = 'DWS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberSyncTasksRequestSyncStatusEnum {
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
export enum ListSecurityMemberSyncTasksRequestScheduleStatusEnum {
    NOT_SCHEDULE = 'NOT_SCHEDULE',
    SCHEDULING = 'SCHEDULING'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberSyncTasksRequestOrderByEnum {
    CLUSTER_NAME = 'CLUSTER_NAME',
    CREATE_TIME = 'CREATE_TIME',
    UPDATE_TIME = 'UPDATE_TIME',
    SYNC_TIME = 'SYNC_TIME'
}
