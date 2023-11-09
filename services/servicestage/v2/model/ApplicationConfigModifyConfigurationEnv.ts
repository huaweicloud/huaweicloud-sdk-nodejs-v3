

export class ApplicationConfigModifyConfigurationEnv {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): ApplicationConfigModifyConfigurationEnv {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ApplicationConfigModifyConfigurationEnv {
        this['value'] = value;
        return this;
    }
}