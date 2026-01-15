

export class ScheduledTasksRecords {
    public id?: string;
    private 'start_time'?: string;
    private 'task_type'?: string;
    private 'scheduled_type'?: string;
    private 'life_cycle_type'?: string;
    public status?: string;
    private 'success_num'?: number;
    private 'failed_num'?: number;
    private 'skip_num'?: number;
    private 'time_zone'?: string;
    private 'execute_task_id'?: string;
    private 'execute_object_type'?: string;
    private 'expire_time'?: string;
    private 'extra_params'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduledTasksRecords {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: string): ScheduledTasksRecords {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTaskType(taskType: string): ScheduledTasksRecords {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: string): ScheduledTasksRecords {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): string | undefined {
        return this['scheduled_type'];
    }
    public withLifeCycleType(lifeCycleType: string): ScheduledTasksRecords {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withStatus(status: string): ScheduledTasksRecords {
        this['status'] = status;
        return this;
    }
    public withSuccessNum(successNum: number): ScheduledTasksRecords {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailedNum(failedNum: number): ScheduledTasksRecords {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withSkipNum(skipNum: number): ScheduledTasksRecords {
        this['skip_num'] = skipNum;
        return this;
    }
    public set skipNum(skipNum: number  | undefined) {
        this['skip_num'] = skipNum;
    }
    public get skipNum(): number | undefined {
        return this['skip_num'];
    }
    public withTimeZone(timeZone: string): ScheduledTasksRecords {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withExecuteTaskId(executeTaskId: string): ScheduledTasksRecords {
        this['execute_task_id'] = executeTaskId;
        return this;
    }
    public set executeTaskId(executeTaskId: string  | undefined) {
        this['execute_task_id'] = executeTaskId;
    }
    public get executeTaskId(): string | undefined {
        return this['execute_task_id'];
    }
    public withExecuteObjectType(executeObjectType: string): ScheduledTasksRecords {
        this['execute_object_type'] = executeObjectType;
        return this;
    }
    public set executeObjectType(executeObjectType: string  | undefined) {
        this['execute_object_type'] = executeObjectType;
    }
    public get executeObjectType(): string | undefined {
        return this['execute_object_type'];
    }
    public withExpireTime(expireTime: string): ScheduledTasksRecords {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withExtraParams(extraParams: string): ScheduledTasksRecords {
        this['extra_params'] = extraParams;
        return this;
    }
    public set extraParams(extraParams: string  | undefined) {
        this['extra_params'] = extraParams;
    }
    public get extraParams(): string | undefined {
        return this['extra_params'];
    }
}