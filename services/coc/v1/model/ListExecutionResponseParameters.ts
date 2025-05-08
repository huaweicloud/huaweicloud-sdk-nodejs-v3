

export class ListExecutionResponseParameters {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ListExecutionResponseParameters {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListExecutionResponseParameters {
        this['value'] = value;
        return this;
    }
}