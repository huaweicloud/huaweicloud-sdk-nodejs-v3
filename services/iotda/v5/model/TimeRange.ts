

export class TimeRange {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'days_of_week'?: string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): TimeRange {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TimeRange {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDaysOfWeek(daysOfWeek: string): TimeRange {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: string  | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek(): string | undefined {
        return this['days_of_week'];
    }
}