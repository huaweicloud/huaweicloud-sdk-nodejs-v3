

export class EnvironmentCreateLabels {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): EnvironmentCreateLabels {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): EnvironmentCreateLabels {
        this['value'] = value;
        return this;
    }
}