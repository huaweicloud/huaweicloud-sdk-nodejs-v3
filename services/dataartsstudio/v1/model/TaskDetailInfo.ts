

export class TaskDetailInfo {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'monitor_report_id'?: string;
    private 'task_type'?: TaskDetailInfoTaskTypeEnum | string;
    private 'running_status'?: TaskDetailInfoRunningStatusEnum | string;
    private 'external_job_id'?: string;
    private 'source_type'?: string;
    private 'target_type'?: string;
    private 'tracking_url'?: string;
    public state?: TaskDetailInfoStateEnum | string;
    private 'error_msg'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): TaskDetailInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskDetailInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withMonitorReportId(monitorReportId: string): TaskDetailInfo {
        this['monitor_report_id'] = monitorReportId;
        return this;
    }
    public set monitorReportId(monitorReportId: string  | undefined) {
        this['monitor_report_id'] = monitorReportId;
    }
    public get monitorReportId(): string | undefined {
        return this['monitor_report_id'];
    }
    public withTaskType(taskType: TaskDetailInfoTaskTypeEnum | string): TaskDetailInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: TaskDetailInfoTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): TaskDetailInfoTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withRunningStatus(runningStatus: TaskDetailInfoRunningStatusEnum | string): TaskDetailInfo {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: TaskDetailInfoRunningStatusEnum | string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): TaskDetailInfoRunningStatusEnum | string | undefined {
        return this['running_status'];
    }
    public withExternalJobId(externalJobId: string): TaskDetailInfo {
        this['external_job_id'] = externalJobId;
        return this;
    }
    public set externalJobId(externalJobId: string  | undefined) {
        this['external_job_id'] = externalJobId;
    }
    public get externalJobId(): string | undefined {
        return this['external_job_id'];
    }
    public withSourceType(sourceType: string): TaskDetailInfo {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withTargetType(targetType: string): TaskDetailInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTrackingUrl(trackingUrl: string): TaskDetailInfo {
        this['tracking_url'] = trackingUrl;
        return this;
    }
    public set trackingUrl(trackingUrl: string  | undefined) {
        this['tracking_url'] = trackingUrl;
    }
    public get trackingUrl(): string | undefined {
        return this['tracking_url'];
    }
    public withState(state: TaskDetailInfoStateEnum | string): TaskDetailInfo {
        this['state'] = state;
        return this;
    }
    public withErrorMsg(errorMsg: string): TaskDetailInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCreateTime(createTime: number): TaskDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): TaskDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskDetailInfoTaskTypeEnum {
    FLINK = 'FLINK',
    SPARK = 'SPARK',
    DRS = 'DRS'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskDetailInfoRunningStatusEnum {
    INITIALIZING = 'INITIALIZING',
    SNAPSHOT = 'SNAPSHOT',
    BINLOG = 'BINLOG'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskDetailInfoStateEnum {
    EXCEPTION = 'EXCEPTION',
    STOPPING = 'STOPPING',
    SUBMITTING = 'SUBMITTING',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED',
    SUCCESS = 'SUCCESS'
}
