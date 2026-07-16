

export class ConstraintResp {
    public attribute?: string;
    public operator?: string;
    public value?: object;
    public constructor() { 
    }
    public withAttribute(attribute: string): ConstraintResp {
        this['attribute'] = attribute;
        return this;
    }
    public withOperator(operator: string): ConstraintResp {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: object): ConstraintResp {
        this['value'] = value;
        return this;
    }
}