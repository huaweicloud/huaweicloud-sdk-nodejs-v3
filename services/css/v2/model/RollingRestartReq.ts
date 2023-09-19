

export class RollingRestartReq {
    public type?: string;
    public value?: string;
    public constructor(type?: string, value?: string) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: string): RollingRestartReq {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): RollingRestartReq {
        this['value'] = value;
        return this;
    }
}