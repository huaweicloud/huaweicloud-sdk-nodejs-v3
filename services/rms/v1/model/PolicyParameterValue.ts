

export class PolicyParameterValue {
    public value?: object;
    public constructor() { 
    }
    public withValue(value: object): PolicyParameterValue {
        this['value'] = value;
        return this;
    }
}