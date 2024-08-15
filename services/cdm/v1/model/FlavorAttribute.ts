

export class FlavorAttribute {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): FlavorAttribute {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): FlavorAttribute {
        this['value'] = value;
        return this;
    }
}