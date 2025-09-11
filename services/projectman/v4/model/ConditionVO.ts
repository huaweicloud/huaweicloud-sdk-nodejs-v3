

export class ConditionVO {
    public operator?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withOperator(operator: string): ConditionVO {
        this['operator'] = operator;
        return this;
    }
    public withValues(values: Array<string>): ConditionVO {
        this['values'] = values;
        return this;
    }
}