

export class ListQueriesCondition {
    public field?: string;
    public value?: string;
    public operator?: string;
    public constructor(field?: string, value?: string, operator?: string) { 
        this['field'] = field;
        this['value'] = value;
        this['operator'] = operator;
    }
    public withField(field: string): ListQueriesCondition {
        this['field'] = field;
        return this;
    }
    public withValue(value: string): ListQueriesCondition {
        this['value'] = value;
        return this;
    }
    public withOperator(operator: string): ListQueriesCondition {
        this['operator'] = operator;
        return this;
    }
}