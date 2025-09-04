

export class TimeSpans {
    public start?: string;
    public end?: string;
    public constructor(start?: string, end?: string) { 
        this['start'] = start;
        this['end'] = end;
    }
    public withStart(start: string): TimeSpans {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): TimeSpans {
        this['end'] = end;
        return this;
    }
}