

export class ScheduledTaskBasicInfo {
    public id?: string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'scheduled_type'?: string;
    private 'task_type'?: string;
    private 'associated_task_type'?: string;
    private 'risk_level'?: string;
    private 'created_by'?: string;
    private 'update_by'?: string;
    private 'created_user_name'?: string;
    public reviewer?: string;
    private 'reviewer_user_name'?: string;
    private 'approve_status'?: object;
    private 'last_execution_time'?: number;
    private 'last_execution_status'?: string;
    private 'execution_count'?: number;
    public enabled?: boolean;
    private 'created_time'?: number;
    private 'modified_time'?: number;
    private 'region_id'?: string;
    private 'associated_task_name'?: string;
    private 'associated_task_name_en'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduledTaskBasicInfo {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScheduledTaskBasicInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ScheduledTaskBasicInfo {
        this['name'] = name;
        return this;
    }
    public withScheduledType(scheduledType: string): ScheduledTaskBasicInfo {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): string | undefined {
        return this['scheduled_type'];
    }
    public withTaskType(taskType: string): ScheduledTaskBasicInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskType(associatedTaskType: string): ScheduledTaskBasicInfo {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): string | undefined {
        return this['associated_task_type'];
    }
    public withRiskLevel(riskLevel: string): ScheduledTaskBasicInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withCreatedBy(createdBy: string): ScheduledTaskBasicInfo {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdateBy(updateBy: string): ScheduledTaskBasicInfo {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreatedUserName(createdUserName: string): ScheduledTaskBasicInfo {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withReviewer(reviewer: string): ScheduledTaskBasicInfo {
        this['reviewer'] = reviewer;
        return this;
    }
    public withReviewerUserName(reviewerUserName: string): ScheduledTaskBasicInfo {
        this['reviewer_user_name'] = reviewerUserName;
        return this;
    }
    public set reviewerUserName(reviewerUserName: string  | undefined) {
        this['reviewer_user_name'] = reviewerUserName;
    }
    public get reviewerUserName(): string | undefined {
        return this['reviewer_user_name'];
    }
    public withApproveStatus(approveStatus: object): ScheduledTaskBasicInfo {
        this['approve_status'] = approveStatus;
        return this;
    }
    public set approveStatus(approveStatus: object  | undefined) {
        this['approve_status'] = approveStatus;
    }
    public get approveStatus(): object | undefined {
        return this['approve_status'];
    }
    public withLastExecutionTime(lastExecutionTime: number): ScheduledTaskBasicInfo {
        this['last_execution_time'] = lastExecutionTime;
        return this;
    }
    public set lastExecutionTime(lastExecutionTime: number  | undefined) {
        this['last_execution_time'] = lastExecutionTime;
    }
    public get lastExecutionTime(): number | undefined {
        return this['last_execution_time'];
    }
    public withLastExecutionStatus(lastExecutionStatus: string): ScheduledTaskBasicInfo {
        this['last_execution_status'] = lastExecutionStatus;
        return this;
    }
    public set lastExecutionStatus(lastExecutionStatus: string  | undefined) {
        this['last_execution_status'] = lastExecutionStatus;
    }
    public get lastExecutionStatus(): string | undefined {
        return this['last_execution_status'];
    }
    public withExecutionCount(executionCount: number): ScheduledTaskBasicInfo {
        this['execution_count'] = executionCount;
        return this;
    }
    public set executionCount(executionCount: number  | undefined) {
        this['execution_count'] = executionCount;
    }
    public get executionCount(): number | undefined {
        return this['execution_count'];
    }
    public withEnabled(enabled: boolean): ScheduledTaskBasicInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withCreatedTime(createdTime: number): ScheduledTaskBasicInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: number): ScheduledTaskBasicInfo {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: number  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): number | undefined {
        return this['modified_time'];
    }
    public withRegionId(regionId: string): ScheduledTaskBasicInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAssociatedTaskName(associatedTaskName: string): ScheduledTaskBasicInfo {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withAssociatedTaskNameEn(associatedTaskNameEn: string): ScheduledTaskBasicInfo {
        this['associated_task_name_en'] = associatedTaskNameEn;
        return this;
    }
    public set associatedTaskNameEn(associatedTaskNameEn: string  | undefined) {
        this['associated_task_name_en'] = associatedTaskNameEn;
    }
    public get associatedTaskNameEn(): string | undefined {
        return this['associated_task_name_en'];
    }
}