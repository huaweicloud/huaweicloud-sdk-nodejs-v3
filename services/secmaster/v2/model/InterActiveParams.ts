

export class InterActiveParams {
    public key?: string;
    public value?: string;
    public operator?: string;
    public constructor() { 
    }
    public withKey(key: string): InterActiveParams {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): InterActiveParams {
        this['value'] = value;
        return this;
    }
    public withOperator(operator: string): InterActiveParams {
        this['operator'] = operator;
        return this;
    }
}