

export class Input {
    public name?: string;
    public value?: string;
    public type?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): Input {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Input {
        this['value'] = value;
        return this;
    }
    public withType(type: string): Input {
        this['type'] = type;
        return this;
    }
}