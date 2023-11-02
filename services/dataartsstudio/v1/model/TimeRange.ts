

export class TimeRange {
    private 'time_type'?: string;
    public start?: string;
    public end?: string;
    public constructor(timeType?: string, start?: string, end?: string) { 
        this['time_type'] = timeType;
        this['start'] = start;
        this['end'] = end;
    }
    public withTimeType(timeType: string): TimeRange {
        this['time_type'] = timeType;
        return this;
    }
    public set timeType(timeType: string  | undefined) {
        this['time_type'] = timeType;
    }
    public get timeType(): string | undefined {
        return this['time_type'];
    }
    public withStart(start: string): TimeRange {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): TimeRange {
        this['end'] = end;
        return this;
    }
}