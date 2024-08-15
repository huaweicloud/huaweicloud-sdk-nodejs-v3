

export class ObjectFilter {
    public operator?: string;
    public field?: string;
    public values?: Array<string>;
    public constructor(operator?: string, field?: string, values?: Array<string>) { 
        this['operator'] = operator;
        this['field'] = field;
        this['values'] = values;
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