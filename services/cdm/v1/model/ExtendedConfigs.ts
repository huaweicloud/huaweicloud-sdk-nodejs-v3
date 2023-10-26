

export class ExtendedConfigs {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ExtendedConfigs {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ExtendedConfigs {
        this['value'] = value;
        return this;
    }
}