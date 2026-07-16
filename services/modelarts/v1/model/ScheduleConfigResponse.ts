

export class ScheduleConfigResponse {
    private 'due_time'?: number;
    public duration?: number;
    private 'time_unit'?: string;
    public type?: string;
    public processed?: boolean;
    public constructor() { 
    }
    public withDueTime(dueTime: number): ScheduleConfigResponse {
        this['due_time'] = dueTime;
        return this;
    }
    public set dueTime(dueTime: number  | undefined) {
        this['due_time'] = dueTime;
    }
    public get dueTime(): number | undefined {
        return this['due_time'];
    }
    public withDuration(duration: number): ScheduleConfigResponse {
        this['duration'] = duration;
        return this;
    }
    public withTimeUnit(timeUnit: string): ScheduleConfigResponse {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): string | undefined {
        return this['time_unit'];
    }
    public withType(type: string): ScheduleConfigResponse {
        this['type'] = type;
        return this;
    }
    public withProcessed(processed: boolean): ScheduleConfigResponse {
        this['processed'] = processed;
        return this;
    }
}