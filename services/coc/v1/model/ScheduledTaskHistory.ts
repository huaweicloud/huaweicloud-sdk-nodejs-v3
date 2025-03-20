

export class ScheduledTaskHistory {
    public id?: string;
    private 'task_type'?: string;
    private 'execution_id'?: string;
    private 'associated_task_name'?: string;
    private 'associated_task_name_en'?: string;
    public region?: string;
    private 'created_by'?: string;
    private 'started_time'?: number;
    private 'finished_time'?: number;
    public status?: string;
    private 'execution_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduledTaskHistory {
        this['id'] = id;
        return this;
    }
    public withTaskType(taskType: string): ScheduledTaskHistory {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withExecutionId(executionId: string): ScheduledTaskHistory {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withAssociatedTaskName(associatedTaskName: string): ScheduledTaskHistory {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withAssociatedTaskNameEn(associatedTaskNameEn: string): ScheduledTaskHistory {
        this['associated_task_name_en'] = associatedTaskNameEn;
        return this;
    }
    public set associatedTaskNameEn(associatedTaskNameEn: string  | undefined) {
        this['associated_task_name_en'] = associatedTaskNameEn;
    }
    public get associatedTaskNameEn(): string | undefined {
        return this['associated_task_name_en'];
    }
    public withRegion(region: string): ScheduledTaskHistory {
        this['region'] = region;
        return this;
    }
    public withCreatedBy(createdBy: string): ScheduledTaskHistory {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withStartedTime(startedTime: number): ScheduledTaskHistory {
        this['started_time'] = startedTime;
        return this;
    }
    public set startedTime(startedTime: number  | undefined) {
        this['started_time'] = startedTime;
    }
    public get startedTime(): number | undefined {
        return this['started_time'];
    }
    public withFinishedTime(finishedTime: number): ScheduledTaskHistory {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: number  | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime(): number | undefined {
        return this['finished_time'];
    }
    public withStatus(status: string): ScheduledTaskHistory {
        this['status'] = status;
        return this;
    }
    public withExecutionMsg(executionMsg: string): ScheduledTaskHistory {
        this['execution_msg'] = executionMsg;
        return this;
    }
    public set executionMsg(executionMsg: string  | undefined) {
        this['execution_msg'] = executionMsg;
    }
    public get executionMsg(): string | undefined {
        return this['execution_msg'];
    }
}