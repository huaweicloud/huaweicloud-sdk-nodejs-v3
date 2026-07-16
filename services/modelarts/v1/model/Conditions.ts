

export class Conditions {
    public key?: string;
    public operator?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): Conditions {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: string): Conditions {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: Array<string>): Conditions {
        this['value'] = value;
        return this;
    }
}