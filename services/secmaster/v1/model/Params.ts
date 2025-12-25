

export class Params {
    public key?: string;
    public value?: string;
    public description?: string;
    public example?: string;
    public mandatory?: boolean;
    public constructor() { 
    }
    public withKey(key: string): Params {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Params {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): Params {
        this['description'] = description;
        return this;
    }
    public withExample(example: string): Params {
        this['example'] = example;
        return this;
    }
    public withMandatory(mandatory: boolean): Params {
        this['mandatory'] = mandatory;
        return this;
    }
}