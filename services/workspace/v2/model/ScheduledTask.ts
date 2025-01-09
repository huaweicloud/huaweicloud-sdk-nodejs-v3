

export class ScheduledTask {
    public id?: string;
    private 'task_name'?: string;
    private 'task_type'?: string;
    private 'scheduled_type'?: string;
    private 'life_cycle_type'?: string;
    private 'last_status'?: string;
    private 'next_execution_time'?: string;
    public enable?: boolean;
    public description?: string;
    public priority?: number;
    private 'time_zone'?: string;
    private 'wait_time'?: number;
    public constructor() { 
    }
    public withId(id: string): ScheduledTask {
        this['id'] = id;
        return this;
    }
    public withTaskName(taskName: string): ScheduledTask {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: string): ScheduledTask {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: string): ScheduledTask {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): string | undefined {
        return this['scheduled_type'];
    }
    public withLifeCycleType(lifeCycleType: string): ScheduledTask {
        this['life_cycle_type'] = lifeCycleType;
        return this;
    }
    public set lifeCycleType(lifeCycleType: string  | undefined) {
        this['life_cycle_type'] = lifeCycleType;
    }
    public get lifeCycleType(): string | undefined {
        return this['life_cycle_type'];
    }
    public withLastStatus(lastStatus: string): ScheduledTask {
        this['last_status'] = lastStatus;
        return this;
    }
    public set lastStatus(lastStatus: string  | undefined) {
        this['last_status'] = lastStatus;
    }
    public get lastStatus(): string | undefined {
        return this['last_status'];
    }
    public withNextExecutionTime(nextExecutionTime: string): ScheduledTask {
        this['next_execution_time'] = nextExecutionTime;
        return this;
    }
    public set nextExecutionTime(nextExecutionTime: string  | undefined) {
        this['next_execution_time'] = nextExecutionTime;
    }
    public get nextExecutionTime(): string | undefined {
        return this['next_execution_time'];
    }
    public withEnable(enable: boolean): ScheduledTask {
        this['enable'] = enable;
        return this;
    }
    public withDescription(description: string): ScheduledTask {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): ScheduledTask {
        this['priority'] = priority;
        return this;
    }
    public withTimeZone(timeZone: string): ScheduledTask {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withWaitTime(waitTime: number): ScheduledTask {
        this['wait_time'] = waitTime;
        return this;
    }
    public set waitTime(waitTime: number  | undefined) {
        this['wait_time'] = waitTime;
    }
    public get waitTime(): number | undefined {
        return this['wait_time'];
    }
}