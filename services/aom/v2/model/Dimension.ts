

export class Dimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): Dimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Dimension {
        this['value'] = value;
        return this;
    }
}