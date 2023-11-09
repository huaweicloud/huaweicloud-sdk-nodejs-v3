

export class ModifyInstanceConfig {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ModifyInstanceConfig {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ModifyInstanceConfig {
        this['value'] = value;
        return this;
    }
}