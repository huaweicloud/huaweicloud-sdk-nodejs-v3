

export class KeyValueBean {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): KeyValueBean {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): KeyValueBean {
        this['value'] = value;
        return this;
    }
}