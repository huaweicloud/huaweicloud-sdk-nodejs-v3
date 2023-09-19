

export class RestartClusterReq {
    public type?: string;
    public value?: string;
    public constructor(type?: string, value?: string) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: string): RestartClusterReq {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): RestartClusterReq {
        this['value'] = value;
        return this;
    }
}