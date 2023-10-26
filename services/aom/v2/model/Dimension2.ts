

export class Dimension2 {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): Dimension2 {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Dimension2 {
        this['value'] = value;
        return this;
    }
}