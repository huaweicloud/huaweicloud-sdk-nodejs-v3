

export class NodeSelector {
    public key?: string;
    public value?: Array<string>;
    public operator?: string;
    public constructor(key?: string, operator?: string) { 
        this['key'] = key;
        this['operator'] = operator;
    }
    public withKey(key: string): NodeSelector {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): NodeSelector {
        this['value'] = value;
        return this;
    }
    public withOperator(operator: string): NodeSelector {
        this['operator'] = operator;
        return this;
    }
}