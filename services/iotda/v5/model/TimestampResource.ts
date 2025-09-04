

export class TimestampResource {
    public type?: string;
    public pattern?: string;
    public value?: object;
    public constructor() { 
    }
    public withType(type: string): TimestampResource {
        this['type'] = type;
        return this;
    }
    public withPattern(pattern: string): TimestampResource {
        this['pattern'] = pattern;
        return this;
    }
    public withValue(value: object): TimestampResource {
        this['value'] = value;
        return this;
    }
}