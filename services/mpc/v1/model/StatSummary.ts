

export class StatSummary {
    public value?: number;
    public date?: string;
    public constructor() { 
    }
    public withValue(value: number): StatSummary {
        this['value'] = value;
        return this;
    }
    public withDate(date: string): StatSummary {
        this['date'] = date;
        return this;
    }
}