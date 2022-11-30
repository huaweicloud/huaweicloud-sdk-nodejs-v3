

export class MonthUsed {
    public date?: string;
    public value?: number;
    public constructor() { 
    }
    public withDate(date: string): MonthUsed {
        this['date'] = date;
        return this;
    }
    public withValue(value: number): MonthUsed {
        this['value'] = value;
        return this;
    }
}