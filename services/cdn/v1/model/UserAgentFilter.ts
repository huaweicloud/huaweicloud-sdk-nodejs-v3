

export class UserAgentFilter {
    public type: string;
    public value?: string;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): UserAgentFilter {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): UserAgentFilter {
        this['value'] = value;
        return this;
    }
}