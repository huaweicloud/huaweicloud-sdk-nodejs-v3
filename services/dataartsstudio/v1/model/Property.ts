

export class Property {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): Property {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Property {
        this['value'] = value;
        return this;
    }
}