

export class EnvironmentViewLabels {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): EnvironmentViewLabels {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): EnvironmentViewLabels {
        this['value'] = value;
        return this;
    }
}