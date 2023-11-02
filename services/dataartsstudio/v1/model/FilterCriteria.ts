

export class FilterCriteria {
    public name?: string;
    public value?: string;
    public operator?: string;
    public constructor(name?: string, value?: string, operator?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['operator'] = operator;
    }
    public withName(name: string): FilterCriteria {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): FilterCriteria {
        this['value'] = value;
        return this;
    }
    public withOperator(operator: string): FilterCriteria {
        this['operator'] = operator;
        return this;
    }
}