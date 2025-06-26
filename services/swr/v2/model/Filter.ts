

export class Filter {
    public type?: string;
    public value?: string;
    public constructor(type?: string, value?: string) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: string): Filter {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): Filter {
        this['value'] = value;
        return this;
    }
}