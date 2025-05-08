

export class ExcutionStepInputs {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExcutionStepInputs {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExcutionStepInputs {
        this['value'] = value;
        return this;
    }
}