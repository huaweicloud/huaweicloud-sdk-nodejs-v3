

export class StepRunInputs {
    public key?: string;
    public value?: object;
    public constructor() { 
    }
    public withKey(key: string): StepRunInputs {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): StepRunInputs {
        this['value'] = value;
        return this;
    }
}