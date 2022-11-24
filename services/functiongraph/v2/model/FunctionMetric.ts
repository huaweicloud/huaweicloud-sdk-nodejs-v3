

export class FunctionMetric {
    public key?: string;
    public value?: number;
    public constructor() { 
    }
    public withKey(key: string): FunctionMetric {
        this['key'] = key;
        return this;
    }
    public withValue(value: number): FunctionMetric {
        this['value'] = value;
        return this;
    }
}