

export class ConfigurationItem {
    public name?: string;
    public value?: object;
    public constructor() { 
    }
    public withName(name: string): ConfigurationItem {
        this['name'] = name;
        return this;
    }
    public withValue(value: object): ConfigurationItem {
        this['value'] = value;
        return this;
    }
}