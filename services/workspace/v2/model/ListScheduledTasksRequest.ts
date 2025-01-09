

export class ListScheduledTasksRequest {
    public offset?: number;
    public limit?: number;
    private 'task_name'?: string;
    private 'task_type'?: string;
    private 'scheduled_type'?: string;
    private 'life_cycle_type'?: string;
    private 'last_status'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ListScheduledTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskName(taskName: string): ListScheduledTasksRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: string): ListScheduledTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: string): ListScheduledTasksRequest {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): string | undefined {
        return this['scheduled_type'];
    }
    public withLifeCycleType(lifeCycleType: string): ListScheduledTasksRequest {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withLastStatus(lastStatus: string): ListScheduledTasksRequest {
        this['last_status'] = lastStatus;
        return this;
    }
    public set lastStatus(lastStatus: string  | undefined) {
        this['last_status'] = lastStatus;
    }
    public get lastStatus(): string | undefined {
        return this['last_status'];
    }
}