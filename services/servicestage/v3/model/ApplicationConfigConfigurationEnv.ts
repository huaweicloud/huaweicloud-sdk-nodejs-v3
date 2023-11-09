

export class ApplicationConfigConfigurationEnv {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ApplicationConfigConfigurationEnv {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ApplicationConfigConfigurationEnv {
        this['value'] = value;
        return this;
    }
}