

export class ObjectFilter {
    public name?: string;
    public operator?: string;
    public field?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): ObjectFilter {
        this['name'] = name;
        return this;
    }
    public withOperator(operator: string): ObjectFilter {
        this['operator'] = operator;
        return this;
    }
    public withField(field: string): ObjectFilter {
        this['field'] = field;
        return this;
    }
    public withValues(values: Array<string>): ObjectFilter {
        this['values'] = values;
        return this;
    }
}