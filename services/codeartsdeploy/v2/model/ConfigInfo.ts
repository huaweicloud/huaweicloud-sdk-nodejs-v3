

export class ConfigInfo {
    public name?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ConfigInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ConfigInfo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ConfigInfo {
        this['value'] = value;
        return this;
    }
}