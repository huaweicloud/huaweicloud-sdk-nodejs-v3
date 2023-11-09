

export class ConditionItem {
    public name?: string;
    public detail?: string;
    public data?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): ConditionItem {
        this['name'] = name;
        return this;
    }
    public withDetail(detail: string): ConditionItem {
        this['detail'] = detail;
        return this;
    }
    public withData(data: Array<string>): ConditionItem {
        this['data'] = data;
        return this;
    }
}