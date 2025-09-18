

export class ExecutionStepInputs {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExecutionStepInputs {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExecutionStepInputs {
        this['value'] = value;
        return this;
    }
}