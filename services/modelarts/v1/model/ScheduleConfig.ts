

export class ScheduleConfig {
    public duration?: number;
    private 'time_unit'?: string;
    public type?: string;
    public constructor() { 
    }
    public withDuration(duration: number): ScheduleConfig {
        this['duration'] = duration;
        return this;
    }
    public withTimeUnit(timeUnit: string): ScheduleConfig {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): string | undefined {
        return this['time_unit'];
    }
    public withType(type: string): ScheduleConfig {
        this['type'] = type;
        return this;
    }
}