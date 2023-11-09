

export class ApplicationListConfigConfigurationEnv {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ApplicationListConfigConfigurationEnv {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ApplicationListConfigConfigurationEnv {
        this['value'] = value;
        return this;
    }
}