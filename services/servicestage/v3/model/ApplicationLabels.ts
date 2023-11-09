

export class ApplicationLabels {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ApplicationLabels {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ApplicationLabels {
        this['value'] = value;
        return this;
    }
}