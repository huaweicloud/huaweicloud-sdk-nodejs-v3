

export class TimeRange {
    public from?: number;
    public to?: number;
    public constructor(from?: number, to?: number) { 
        this['from'] = from;
        this['to'] = to;
    }
    public withFrom(from: number): TimeRange {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): TimeRange {
        this['to'] = to;
        return this;
    }
}