

export class Dimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string) { 
        this['name'] = name;
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