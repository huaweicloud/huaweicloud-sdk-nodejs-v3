

export class ConfigurationEnvParam {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): ConfigurationEnvParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationEnvParam {
        this['value'] = value;
        return this;
    }
}