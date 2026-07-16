

export class AlgorithmResponseResourceRequirements {
    public key?: string;
    public value?: Array<string>;
    public operator?: string;
    public constructor() { 
    }
    public withKey(key: string): AlgorithmResponseResourceRequirements {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): AlgorithmResponseResourceRequirements {
        this['value'] = value;
        return this;
    }
    public withOperator(operator: string): AlgorithmResponseResourceRequirements {
        this['operator'] = operator;
        return this;
    }
}