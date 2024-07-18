

export class AutopilotConfigurationItem {
    public name?: string;
    public value?: object;
    public constructor() { 
    }
    public withName(name: string): AutopilotConfigurationItem {
        this['name'] = name;
        return this;
    }
    public withValue(value: object): AutopilotConfigurationItem {
        this['value'] = value;
        return this;
    }
}