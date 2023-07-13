

export class TaskPolicy {
    private 'schedule_time'?: string | undefined;
    private 'retry_count'?: number | undefined;
    private 'retry_interval'?: number | undefined;
    public constructor() { 
    }
    public withScheduleTime(scheduleTime: string): TaskPolicy {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime() {
        return this['schedule_time'];
    }
    public withRetryCount(retryCount: number): TaskPolicy {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: number | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount() {
        return this['retry_count'];
    }
    public withRetryInterval(retryInterval: number): TaskPolicy {
        this['retry_interval'] = retryInterval;
        return this;
    }
    public set retryInterval(retryInterval: number | undefined) {
        this['retry_interval'] = retryInterval;
    }
    public get retryInterval() {
        return this['retry_interval'];
    }
}