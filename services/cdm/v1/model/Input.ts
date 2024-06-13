

export class Input {
    public name?: string;
    public value?: object;
    public type?: string;
    public constructor(name?: string, value?: object) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): Input {
        this['name'] = name;
        return this;
    }
    public withValue(value: object): Input {
        this['value'] = value;
        return this;
    }
    public withType(type: string): Input {
        this['type'] = type;
        return this;
    }
}