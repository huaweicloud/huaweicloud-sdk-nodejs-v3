

export class UpdateReportRequestBodyReportRange {
    public start?: string;
    public end?: string;
    public constructor(start?: string, end?: string) { 
        this['start'] = start;
        this['end'] = end;
    }
    public withStart(start: string): UpdateReportRequestBodyReportRange {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): UpdateReportRequestBodyReportRange {
        this['end'] = end;
        return this;
    }
}