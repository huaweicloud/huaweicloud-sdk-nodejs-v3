

export class TimeRange {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'days_of_week'?: string | undefined;
    public constructor(startTime: any, endTime: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): TimeRange {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TimeRange {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDaysOfWeek(daysOfWeek: string): TimeRange {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: string | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek() {
        return this['days_of_week'];
    }
}