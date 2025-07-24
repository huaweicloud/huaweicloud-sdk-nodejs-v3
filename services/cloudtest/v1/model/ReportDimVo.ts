

export class ReportDimVo {
    public id?: string;
    public name?: string;
    public value?: number;
    public constructor() { 
    }
    public withId(id: string): ReportDimVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReportDimVo {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): ReportDimVo {
        this['value'] = value;
        return this;
    }
}