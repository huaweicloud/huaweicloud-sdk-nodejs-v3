

export class TagPlain {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TagPlain {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagPlain {
        this['value'] = value;
        return this;
    }
}