

export class RecordRequestArgs {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public format?: string;
    public unit?: string;
    public constructor() { 
    }
    public withStartTime(startTime: string): RecordRequestArgs {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RecordRequestArgs {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFormat(format: string): RecordRequestArgs {
        this['format'] = format;
        return this;
    }
    public withUnit(unit: string): RecordRequestArgs {
        this['unit'] = unit;
        return this;
    }
}