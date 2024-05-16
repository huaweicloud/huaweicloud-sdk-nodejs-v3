

export class MemberSyncTask {
    public id?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'data_connection_workspace'?: string;
    private 'cluster_type'?: MemberSyncTaskClusterTypeEnum | string;
    private 'data_connection_id'?: string;
    private 'data_connection_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'schedule_start_hour'?: number;
    private 'schedule_end_hour'?: number;
    private 'schedule_period'?: MemberSyncTaskSchedulePeriodEnum | string;
    private 'schedule_interval'?: number;
    private 'schedule_status'?: MemberSyncTaskScheduleStatusEnum | string;
    private 'sync_status'?: MemberSyncTaskSyncStatusEnum | string;
    private 'sync_msg'?: string;
    private 'sync_time'?: number;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withId(id: string): MemberSyncTask {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): MemberSyncTask {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): MemberSyncTask {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): MemberSyncTask {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDataConnectionWorkspace(dataConnectionWorkspace: string): MemberSyncTask {
        this['data_connection_workspace'] = dataConnectionWorkspace;
        return this;
    }
    public set dataConnectionWorkspace(dataConnectionWorkspace: string  | undefined) {
        this['data_connection_workspace'] = dataConnectionWorkspace;
    }
    public get dataConnectionWorkspace(): string | undefined {
        return this['data_connection_workspace'];
    }
    public withClusterType(clusterType: MemberSyncTaskClusterTypeEnum | string): MemberSyncTask {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: MemberSyncTaskClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): MemberSyncTaskClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withDataConnectionId(dataConnectionId: string): MemberSyncTask {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withDataConnectionName(dataConnectionName: string): MemberSyncTask {
        this['data_connection_name'] = dataConnectionName;
        return this;
    }
    public set dataConnectionName(dataConnectionName: string  | undefined) {
        this['data_connection_name'] = dataConnectionName;
    }
    public get dataConnectionName(): string | undefined {
        return this['data_connection_name'];
    }
    public withClusterId(clusterId: string): MemberSyncTask {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): MemberSyncTask {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withScheduleStartHour(scheduleStartHour: number): MemberSyncTask {
        this['schedule_start_hour'] = scheduleStartHour;
        return this;
    }
    public set scheduleStartHour(scheduleStartHour: number  | undefined) {
        this['schedule_start_hour'] = scheduleStartHour;
    }
    public get scheduleStartHour(): number | undefined {
        return this['schedule_start_hour'];
    }
    public withScheduleEndHour(scheduleEndHour: number): MemberSyncTask {
        this['schedule_end_hour'] = scheduleEndHour;
        return this;
    }
    public set scheduleEndHour(scheduleEndHour: number  | undefined) {
        this['schedule_end_hour'] = scheduleEndHour;
    }
    public get scheduleEndHour(): number | undefined {
        return this['schedule_end_hour'];
    }
    public withSchedulePeriod(schedulePeriod: MemberSyncTaskSchedulePeriodEnum | string): MemberSyncTask {
        this['schedule_period'] = schedulePeriod;
        return this;
    }
    public set schedulePeriod(schedulePeriod: MemberSyncTaskSchedulePeriodEnum | string  | undefined) {
        this['schedule_period'] = schedulePeriod;
    }
    public get schedulePeriod(): MemberSyncTaskSchedulePeriodEnum | string | undefined {
        return this['schedule_period'];
    }
    public withScheduleInterval(scheduleInterval: number): MemberSyncTask {
        this['schedule_interval'] = scheduleInterval;
        return this;
    }
    public set scheduleInterval(scheduleInterval: number  | undefined) {
        this['schedule_interval'] = scheduleInterval;
    }
    public get scheduleInterval(): number | undefined {
        return this['schedule_interval'];
    }
    public withScheduleStatus(scheduleStatus: MemberSyncTaskScheduleStatusEnum | string): MemberSyncTask {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: MemberSyncTaskScheduleStatusEnum | string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): MemberSyncTaskScheduleStatusEnum | string | undefined {
        return this['schedule_status'];
    }
    public withSyncStatus(syncStatus: MemberSyncTaskSyncStatusEnum | string): MemberSyncTask {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: MemberSyncTaskSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): MemberSyncTaskSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncMsg(syncMsg: string): MemberSyncTask {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
    public withSyncTime(syncTime: number): MemberSyncTask {
        this['sync_time'] = syncTime;
        return this;
    }
    public set syncTime(syncTime: number  | undefined) {
        this['sync_time'] = syncTime;
    }
    public get syncTime(): number | undefined {
        return this['sync_time'];
    }
    public withCreateTime(createTime: number): MemberSyncTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): MemberSyncTask {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): MemberSyncTask {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): MemberSyncTask {
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
export enum MemberSyncTaskClusterTypeEnum {
    MRS = 'MRS',
    DWS = 'DWS'
}
/**
    * @export
    * @enum {string}
    */
export enum MemberSyncTaskSchedulePeriodEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR'
}
/**
    * @export
    * @enum {string}
    */
export enum MemberSyncTaskScheduleStatusEnum {
    NOT_SCHEDULE = 'NOT_SCHEDULE',
    SCHEDULING = 'SCHEDULING'
}
/**
    * @export
    * @enum {string}
    */
export enum MemberSyncTaskSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
