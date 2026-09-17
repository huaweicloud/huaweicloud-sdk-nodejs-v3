

export class SecurityConfigurationParameter {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityConfigurationParameter {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): SecurityConfigurationParameter {
        this['value'] = value;
        return this;
    }
}