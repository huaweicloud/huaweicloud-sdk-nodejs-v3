

export class CreateReportRequestBodyReportRange {
    public start?: string;
    public end?: string;
    public constructor(start?: string, end?: string) { 
        this['start'] = start;
        this['end'] = end;
    }
    public withStart(start: string): CreateReportRequestBodyReportRange {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): CreateReportRequestBodyReportRange {
        this['end'] = end;
        return this;
    }
}