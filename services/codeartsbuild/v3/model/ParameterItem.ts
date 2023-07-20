

export class ParameterItem {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): ParameterItem {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ParameterItem {
        this['value'] = value;
        return this;
    }
}