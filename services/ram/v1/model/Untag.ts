

export class Untag {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): Untag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Untag {
        this['value'] = value;
        return this;
    }
}