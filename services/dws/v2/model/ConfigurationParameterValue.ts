

export class ConfigurationParameterValue {
    public type: string;
    public name: string;
    public value: string;
    public constructor(type?: any, name?: any, value?: any) { 
        this['type'] = type;
        this['name'] = name;
        this['value'] = value;
    }
    public withType(type: string): ConfigurationParameterValue {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ConfigurationParameterValue {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ConfigurationParameterValue {
        this['value'] = value;
        return this;
    }
}