

export class ServerSystemTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ServerSystemTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ServerSystemTag {
        this['value'] = value;
        return this;
    }
}