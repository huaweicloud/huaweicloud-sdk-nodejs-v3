

export class ScsMatch {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ScsMatch {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ScsMatch {
        this['value'] = value;
        return this;
    }
}