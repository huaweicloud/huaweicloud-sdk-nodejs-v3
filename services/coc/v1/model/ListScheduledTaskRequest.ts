

export class ListScheduledTaskRequest {
    private 'enterprise_project_id'?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'scheduled_type'?: ListScheduledTaskRequestScheduledTypeEnum | string;
    private 'task_type'?: ListScheduledTaskRequestTaskTypeEnum | string;
    private 'associated_task_type'?: ListScheduledTaskRequestAssociatedTaskTypeEnum | string;
    private 'risk_level'?: string;
    private 'created_by'?: string;
    public reviewer?: string;
    private 'reviewer_user_name'?: string;
    private 'approve_status'?: ListScheduledTaskRequestApproveStatusEnum | string;
    private 'last_execution_status'?: ListScheduledTaskRequestLastExecutionStatusEnum | string;
    private 'last_execution_start_time'?: number;
    private 'last_execution_end_time'?: number;
    public marker?: string;
    private 'region_id'?: string;
    private 'resource_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListScheduledTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTaskId(taskId: string): ListScheduledTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ListScheduledTaskRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withScheduledType(scheduledType: ListScheduledTaskRequestScheduledTypeEnum | string): ListScheduledTaskRequest {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ListScheduledTaskRequestScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ListScheduledTaskRequestScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withTaskType(taskType: ListScheduledTaskRequestTaskTypeEnum | string): ListScheduledTaskRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ListScheduledTaskRequestTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ListScheduledTaskRequestTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskType(associatedTaskType: ListScheduledTaskRequestAssociatedTaskTypeEnum | string): ListScheduledTaskRequest {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: ListScheduledTaskRequestAssociatedTaskTypeEnum | string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): ListScheduledTaskRequestAssociatedTaskTypeEnum | string | undefined {
        return this['associated_task_type'];
    }
    public withRiskLevel(riskLevel: string): ListScheduledTaskRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withCreatedBy(createdBy: string): ListScheduledTaskRequest {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withReviewer(reviewer: string): ListScheduledTaskRequest {
        this['reviewer'] = reviewer;
        return this;
    }
    public withReviewerUserName(reviewerUserName: string): ListScheduledTaskRequest {
        this['reviewer_user_name'] = reviewerUserName;
        return this;
    }
    public set reviewerUserName(reviewerUserName: string  | undefined) {
        this['reviewer_user_name'] = reviewerUserName;
    }
    public get reviewerUserName(): string | undefined {
        return this['reviewer_user_name'];
    }
    public withApproveStatus(approveStatus: ListScheduledTaskRequestApproveStatusEnum | string): ListScheduledTaskRequest {
        this['approve_status'] = approveStatus;
        return this;
    }
    public set approveStatus(approveStatus: ListScheduledTaskRequestApproveStatusEnum | string  | undefined) {
        this['approve_status'] = approveStatus;
    }
    public get approveStatus(): ListScheduledTaskRequestApproveStatusEnum | string | undefined {
        return this['approve_status'];
    }
    public withLastExecutionStatus(lastExecutionStatus: ListScheduledTaskRequestLastExecutionStatusEnum | string): ListScheduledTaskRequest {
        this['last_execution_status'] = lastExecutionStatus;
        return this;
    }
    public set lastExecutionStatus(lastExecutionStatus: ListScheduledTaskRequestLastExecutionStatusEnum | string  | undefined) {
        this['last_execution_status'] = lastExecutionStatus;
    }
    public get lastExecutionStatus(): ListScheduledTaskRequestLastExecutionStatusEnum | string | undefined {
        return this['last_execution_status'];
    }
    public withLastExecutionStartTime(lastExecutionStartTime: number): ListScheduledTaskRequest {
        this['last_execution_start_time'] = lastExecutionStartTime;
        return this;
    }
    public set lastExecutionStartTime(lastExecutionStartTime: number  | undefined) {
        this['last_execution_start_time'] = lastExecutionStartTime;
    }
    public get lastExecutionStartTime(): number | undefined {
        return this['last_execution_start_time'];
    }
    public withLastExecutionEndTime(lastExecutionEndTime: number): ListScheduledTaskRequest {
        this['last_execution_end_time'] = lastExecutionEndTime;
        return this;
    }
    public set lastExecutionEndTime(lastExecutionEndTime: number  | undefined) {
        this['last_execution_end_time'] = lastExecutionEndTime;
    }
    public get lastExecutionEndTime(): number | undefined {
        return this['last_execution_end_time'];
    }
    public withMarker(marker: string): ListScheduledTaskRequest {
        this['marker'] = marker;
        return this;
    }
    public withRegionId(regionId: string): ListScheduledTaskRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): ListScheduledTaskRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withOffset(offset: number): ListScheduledTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledTaskRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskRequestScheduledTypeEnum {
    ONCE = 'ONCE',
    PERIODIC = 'PERIODIC',
    CRON = 'CRON'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskRequestTaskTypeEnum {
    SCRIPT = 'SCRIPT',
    RUNBOOK = 'RUNBOOK'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskRequestAssociatedTaskTypeEnum {
    CUSTOMIZATION = 'CUSTOMIZATION',
    COMMUNAL = 'COMMUNAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskRequestApproveStatusEnum {
    PENDING = 'PENDING',
    REJECTED = 'REJECTED',
    PASSED = 'PASSED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskRequestLastExecutionStatusEnum {
    READY = 'READY',
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    FINISHED = 'FINISHED',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED'
}
