
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityMemberSyncTaskResponse extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'data_connection_workspace'?: string;
    private 'cluster_type'?: ShowSecurityMemberSyncTaskResponseClusterTypeEnum | string;
    private 'data_connection_id'?: string;
    private 'data_connection_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'schedule_start_hour'?: number;
    private 'schedule_end_hour'?: number;
    private 'schedule_period'?: ShowSecurityMemberSyncTaskResponseSchedulePeriodEnum | string;
    private 'schedule_interval'?: number;
    private 'schedule_status'?: ShowSecurityMemberSyncTaskResponseScheduleStatusEnum | string;
    private 'sync_status'?: ShowSecurityMemberSyncTaskResponseSyncStatusEnum | string;
    private 'sync_msg'?: string;
    private 'sync_time'?: number;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSecurityMemberSyncTaskResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ShowSecurityMemberSyncTaskResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ShowSecurityMemberSyncTaskResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): ShowSecurityMemberSyncTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDataConnectionWorkspace(dataConnectionWorkspace: string): ShowSecurityMemberSyncTaskResponse {
        this['data_connection_workspace'] = dataConnectionWorkspace;
        return this;
    }
    public set dataConnectionWorkspace(dataConnectionWorkspace: string  | undefined) {
        this['data_connection_workspace'] = dataConnectionWorkspace;
    }
    public get dataConnectionWorkspace(): string | undefined {
        return this['data_connection_workspace'];
    }
    public withClusterType(clusterType: ShowSecurityMemberSyncTaskResponseClusterTypeEnum | string): ShowSecurityMemberSyncTaskResponse {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: ShowSecurityMemberSyncTaskResponseClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): ShowSecurityMemberSyncTaskResponseClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withDataConnectionId(dataConnectionId: string): ShowSecurityMemberSyncTaskResponse {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withDataConnectionName(dataConnectionName: string): ShowSecurityMemberSyncTaskResponse {
        this['data_connection_name'] = dataConnectionName;
        return this;
    }
    public set dataConnectionName(dataConnectionName: string  | undefined) {
        this['data_connection_name'] = dataConnectionName;
    }
    public get dataConnectionName(): string | undefined {
        return this['data_connection_name'];
    }
    public withClusterId(clusterId: string): ShowSecurityMemberSyncTaskResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ShowSecurityMemberSyncTaskResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withScheduleStartHour(scheduleStartHour: number): ShowSecurityMemberSyncTaskResponse {
        this['schedule_start_hour'] = scheduleStartHour;
        return this;
    }
    public set scheduleStartHour(scheduleStartHour: number  | undefined) {
        this['schedule_start_hour'] = scheduleStartHour;
    }
    public get scheduleStartHour(): number | undefined {
        return this['schedule_start_hour'];
    }
    public withScheduleEndHour(scheduleEndHour: number): ShowSecurityMemberSyncTaskResponse {
        this['schedule_end_hour'] = scheduleEndHour;
        return this;
    }
    public set scheduleEndHour(scheduleEndHour: number  | undefined) {
        this['schedule_end_hour'] = scheduleEndHour;
    }
    public get scheduleEndHour(): number | undefined {
        return this['schedule_end_hour'];
    }
    public withSchedulePeriod(schedulePeriod: ShowSecurityMemberSyncTaskResponseSchedulePeriodEnum | string): ShowSecurityMemberSyncTaskResponse {
        this['schedule_period'] = schedulePeriod;
        return this;
    }
    public set schedulePeriod(schedulePeriod: ShowSecurityMemberSyncTaskResponseSchedulePeriodEnum | string  | undefined) {
        this['schedule_period'] = schedulePeriod;
    }
    public get schedulePeriod(): ShowSecurityMemberSyncTaskResponseSchedulePeriodEnum | string | undefined {
        return this['schedule_period'];
    }
    public withScheduleInterval(scheduleInterval: number): ShowSecurityMemberSyncTaskResponse {
        this['schedule_interval'] = scheduleInterval;
        return this;
    }
    public set scheduleInterval(scheduleInterval: number  | undefined) {
        this['schedule_interval'] = scheduleInterval;
    }
    public get scheduleInterval(): number | undefined {
        return this['schedule_interval'];
    }
    public withScheduleStatus(scheduleStatus: ShowSecurityMemberSyncTaskResponseScheduleStatusEnum | string): ShowSecurityMemberSyncTaskResponse {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: ShowSecurityMemberSyncTaskResponseScheduleStatusEnum | string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): ShowSecurityMemberSyncTaskResponseScheduleStatusEnum | string | undefined {
        return this['schedule_status'];
    }
    public withSyncStatus(syncStatus: ShowSecurityMemberSyncTaskResponseSyncStatusEnum | string): ShowSecurityMemberSyncTaskResponse {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ShowSecurityMemberSyncTaskResponseSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ShowSecurityMemberSyncTaskResponseSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncMsg(syncMsg: string): ShowSecurityMemberSyncTaskResponse {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
    public withSyncTime(syncTime: number): ShowSecurityMemberSyncTaskResponse {
        this['sync_time'] = syncTime;
        return this;
    }
    public set syncTime(syncTime: number  | undefined) {
        this['sync_time'] = syncTime;
    }
    public get syncTime(): number | undefined {
        return this['sync_time'];
    }
    public withCreateTime(createTime: number): ShowSecurityMemberSyncTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ShowSecurityMemberSyncTaskResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): ShowSecurityMemberSyncTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): ShowSecurityMemberSyncTaskResponse {
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
export enum ShowSecurityMemberSyncTaskResponseClusterTypeEnum {
    MRS = 'MRS',
    DWS = 'DWS'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityMemberSyncTaskResponseSchedulePeriodEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityMemberSyncTaskResponseScheduleStatusEnum {
    NOT_SCHEDULE = 'NOT_SCHEDULE',
    SCHEDULING = 'SCHEDULING'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityMemberSyncTaskResponseSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
