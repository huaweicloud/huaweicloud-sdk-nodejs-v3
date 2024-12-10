

export class ReportData {
    public date?: string;
    public value?: number;
    public constructor() { 
    }
    public withDate(date: string): ReportData {
        this['date'] = date;
        return this;
    }
    public withValue(value: number): ReportData {
        this['value'] = value;
        return this;
    }
}