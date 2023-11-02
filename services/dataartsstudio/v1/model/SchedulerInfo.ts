

export class SchedulerInfo {
    private 'cron_expression'?: string;
    private 'end_time'?: string;
    private 'max_time_out'?: number;
    public interval?: string;
    private 'schedule_type'?: string;
    private 'start_time'?: string;
    private 'job_id'?: number;
    public enabled?: number;
    public constructor() { 
    }
    public withCronExpression(cronExpression: string): SchedulerInfo {
        this['cron_expression'] = cronExpression;
        return this;
    }
    public set cronExpression(cronExpression: string  | undefined) {
        this['cron_expression'] = cronExpression;
    }
    public get cronExpression(): string | undefined {
        return this['cron_expression'];
    }
    public withEndTime(endTime: string): SchedulerInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMaxTimeOut(maxTimeOut: number): SchedulerInfo {
        this['max_time_out'] = maxTimeOut;
        return this;
    }
    public set maxTimeOut(maxTimeOut: number  | undefined) {
        this['max_time_out'] = maxTimeOut;
    }
    public get maxTimeOut(): number | undefined {
        return this['max_time_out'];
    }
    public withInterval(interval: string): SchedulerInfo {
        this['interval'] = interval;
        return this;
    }
    public withScheduleType(scheduleType: string): SchedulerInfo {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withStartTime(startTime: string): SchedulerInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withJobId(jobId: number): SchedulerInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withEnabled(enabled: number): SchedulerInfo {
        this['enabled'] = enabled;
        return this;
    }
}