

export class Constraint {
    public attribute?: string;
    public operator?: string;
    public value?: object;
    public constructor() { 
    }
    public withAttribute(attribute: string): Constraint {
        this['attribute'] = attribute;
        return this;
    }
    public withOperator(operator: string): Constraint {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: object): Constraint {
        this['value'] = value;
        return this;
    }
}