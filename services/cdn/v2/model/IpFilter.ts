

export class IpFilter {
    public type?: string;
    public value?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): IpFilter {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): IpFilter {
        this['value'] = value;
        return this;
    }
}