

export class BuildParameter {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): BuildParameter {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): BuildParameter {
        this['value'] = value;
        return this;
    }
}