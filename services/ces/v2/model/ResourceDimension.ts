

export class ResourceDimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): ResourceDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ResourceDimension {
        this['value'] = value;
        return this;
    }
}