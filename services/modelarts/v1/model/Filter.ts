

export class Filter {
    public key?: string;
    public operator?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): Filter {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: string): Filter {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: Array<string>): Filter {
        this['value'] = value;
        return this;
    }
}