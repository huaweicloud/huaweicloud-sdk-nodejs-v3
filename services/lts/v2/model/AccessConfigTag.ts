

export class AccessConfigTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): AccessConfigTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AccessConfigTag {
        this['value'] = value;
        return this;
    }
}