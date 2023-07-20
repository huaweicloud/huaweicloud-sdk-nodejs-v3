

export class ServerTagMatch {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): ServerTagMatch {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ServerTagMatch {
        this['value'] = value;
        return this;
    }
}